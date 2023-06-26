import processTerminalCmd from '../utils/process-terminal-cmd.js';
import { COMMANDS } from '../constants/commands.js';
import currentPath from '../repositories/current-path.js';
import listItems from '../operations/list-items.js';
import exit from '../operations/exit.js';
import { CLI_PHRASES } from '../constants/cli-phrases.js';
import outputFileContents from '../operations/output-file-contents.js';
import CreateFile from '../operations/create-file.js';
import rename from '../operations/rename.js';
import CopyFile from '../operations/copy-file.js';
import moveFile from '../operations/move-file.js';

const handleData = async chunk => {
  try {
    const [command, ...values] = processTerminalCmd(chunk);

    switch (command) {
      case COMMANDS.CD:
        await currentPath.setPath(values[0]);
        break;

      case COMMANDS.UP:
        await currentPath.setPath('../');
        break;

      case COMMANDS.LS:
        await listItems(currentPath.getPath());
        break;

      case COMMANDS.ADD:
        await CreateFile(currentPath.getPath(), values[0]);
        break;

      case COMMANDS.CP:
        await CopyFile(currentPath.getPath(), values);
        break;

      case COMMANDS.CAT:
        await outputFileContents(currentPath.getPath(), values[0]);
        break;

      case COMMANDS.RN:
        await rename(currentPath.getPath(), values);
        break;

      case COMMANDS.MV:
        await moveFile(currentPath.getPath(), values);
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
