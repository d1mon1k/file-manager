import processTerminalCmd from '../utils/process-terminal-cmd.js';
import { COMMANDS } from '../constants/commands.js';
import currentPath from '../repositories/current-path.js';
import listItems from '../operations/list-items.js';
import exit from '../operations/exit.js';
import { CLI_PHRASES } from '../constants/cli-phrases.js';
import outputFileContents from '../operations/output-file-contents.js';

const handleData = async chunk => {
  try {
    const [command, value] = processTerminalCmd(chunk);

    switch (command) {
      case COMMANDS.CD:
        await currentPath.setPath(value);
        break;

      case COMMANDS.UP:
        await currentPath.setPath('../');
        break;

      case COMMANDS.LS:
        await listItems(currentPath.getPath());
        break;

      case COMMANDS.CAT:
        await outputFileContents(currentPath.getPath(), value);
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
