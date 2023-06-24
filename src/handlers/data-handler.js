import processTerminalCmd from '../utils/process-terminal-cmd.js';
import { COMMANDS } from '../constants/commands.js';
import currentPath from '../repositories/current-path.js';
import readDirectory from '../operations/read-directory.js';
import exit from '../operations/exit.js';
import { CLI_PHRASES } from '../constants/cli-phrases.js';

const handleData = async chunk => {
  try {
    const [command, value] = processTerminalCmd(chunk);

    switch (command) {
      case COMMANDS.CD:
        await currentPath.setCurrentPath(value);
        break;

      case COMMANDS.UP:
        await currentPath.setCurrentPath('../');
        break;

      case COMMANDS.LS:
        await readDirectory(currentPath.getCurrentPath());
        break;

      case COMMANDS.EXIT:
        await exit();
        break;

      default:
        console.log(CLI_PHRASES.UNKNOWN_CMD);
        break;
    }
  } catch {
    console.log(CLI_PHRASES.EXECUTION_ERR);
  }
};

export default handleData;
