import processTerminalCmd from '../utils/process-terminal-cmd.js';
import { COMMANDS } from '../constants/commands.js';
import currentPathInstance from '../repositories/current-path-instance.js';
import listItems from '../operations/basic/list-items.js';
import exit from '../operations/basic/exit.js';
import { CLI_PHRASES } from '../constants/cli-phrases.js';
import outputFileContents from '../operations/file-system/output-file-contents.js';
import createFile from '../operations/file-system/create-file.js';
import copyFile from '../operations/file-system/copy-file.js';
import moveFile from '../operations/file-system/move-file.js';
import deleteFile from '../operations/file-system/delete-file.js';
import renameFile from '../operations/file-system/rename-file.js';
import showSystemInfo from '../operations/operating-system/show-system-info.js';
import calculateHash from '../operations/hash-calculation/calculate-hash.js';
import compressFile from '../operations/compress-operations/compress-file.js';
import decompressFile from '../operations/compress-operations/decompress-file.js';
import printCurrentPath from '../operations/basic/print-current-path.js';

const handleData = async chunk => {
  const [command, ...values] = processTerminalCmd(chunk);

  try {
    switch (command) {
      /* ------------- Basic operations ------------- */
      case COMMANDS.CD:
        await currentPathInstance.setPath(values[0]);
        break;

      case COMMANDS.UP:
        await currentPathInstance.setPath('../');
        break;

      case COMMANDS.LS:
        await listItems();
        break;

      case COMMANDS.EXIT:
        await exit();
        break;

      /* ------------- Hash calculation ------------- */
      case COMMANDS.HASH:
        await calculateHash(values[0]);
        break;

      /* ------------- File system ------------- */
      case COMMANDS.ADD:
        await createFile(values[0]);
        break;

      case COMMANDS.CP:
        await copyFile(values);
        break;

      case COMMANDS.CAT:
        await outputFileContents(values[0]);
        break;

      case COMMANDS.RN:
        await renameFile(values);
        break;

      case COMMANDS.MV:
        await moveFile(values);
        break;

      case COMMANDS.RM:
        await deleteFile(values[0]);
        break;

      /* ------------- Operating system ------------- */
      case COMMANDS.OS:
        showSystemInfo(values[0]);
        break;

      /* ------------- Compress operations ------------- */
      case COMMANDS.COMPRESS:
        await compressFile(values);
        break;

      case COMMANDS.DECOMPRESS:
        await decompressFile(values);
        break;

      /* ------------- Unknown command ------------- */
      default:
        console.log(CLI_PHRASES.UNKNOWN_CMD);
        break;
    }
  } catch {
    console.log(CLI_PHRASES.EXECUTION_ERR);
  } finally {
    command !== COMMANDS.EXIT && printCurrentPath();
  }
};
export default handleData;
