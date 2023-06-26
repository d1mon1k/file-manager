import processTerminalCmd from '../utils/process-terminal-cmd.js';
import { COMMANDS } from '../constants/commands.js';
import currentPath from '../repositories/current-path.js';
import listItems from '../operations/basic/list-items.js';
import exit from '../operations/basic/exit.js';
import { CLI_PHRASES } from '../constants/cli-phrases.js';
import outputFileContents from '../operations/file-system/output-file-contents.js';
import CreateFile from '../operations/file-system/create-file.js';
import CopyFile from '../operations/file-system/copy-file.js';
import moveFile from '../operations/file-system/move-file.js';
import deleteFile from '../operations/file-system/delete-file.js';
import renameFile from '../operations/file-system/rename-file.js';
import showSystemInfo from '../operations/operating-system/show-system-info.js';
import calculateHash from '../operations/hash-calculation/calculate-hash.js';
import compressFile from '../operations/compress-operations/compress-file.js';
import decompressFile from '../operations/compress-operations/decompress-file.js';

const handleData = async chunk => {
  try {
    const [command, ...values] = processTerminalCmd(chunk);

    switch (command) {
      /* ------------- Basic operations ------------- */
      case COMMANDS.CD:
        await currentPath.setPath(values[0]);
        break;

      case COMMANDS.UP:
        await currentPath.setPath('../');
        break;

      case COMMANDS.LS:
        await listItems(currentPath.getPath());
        break;

      case COMMANDS.EXIT:
        await exit();
        break;

      /* ------------- Hash calculation ------------- */
      case COMMANDS.HASH:
        await calculateHash(currentPath.getPath(), values[0]);
        break;

      /* ------------- File system ------------- */
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
        await renameFile(currentPath.getPath(), values);
        break;

      case COMMANDS.MV:
        await moveFile(currentPath.getPath(), values);
        break;

      case COMMANDS.RM:
        await deleteFile(currentPath.getPath(), values[0]);
        break;

      /* ------------- Operating system ------------- */
      case COMMANDS.OS:
        showSystemInfo(values[0]);
        break;

      /* ------------- Compress operations ------------- */
      case COMMANDS.COMPRESS:
        await compressFile(currentPath.getPath(), values);
        break;

      case COMMANDS.DECOMPRESS:
        await decompressFile(currentPath.getPath(), values);
        break;

      /* ------------- Unknown command ------------- */
      default:
        console.log(CLI_PHRASES.UNKNOWN_CMD);
        break;
    }
  } catch {
    console.log(CLI_PHRASES.EXECUTION_ERR);
  }
};
export default handleData;
