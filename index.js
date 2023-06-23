import { CLI_PHRASES } from './src/constants/cli-phrases.js';
import readDirectory from './src/operations/read-directory.js';
import { COMMANDS } from './src/constants/commands.js';
import CurrentPath from './src/repositories/current-path.js';
import greeting from './src/operations/greeting.js';
import os from 'node:os';
import processTerminalCmd from './src/utils/process-terminal-cmd.js';

const initialization = async () => {
  greeting();
  const currentPath = new CurrentPath();
  await currentPath.setCurrentPath(os.homedir());

  process.stdin.on('data', async chunk => {
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

        default:
          console.log(CLI_PHRASES.UNKNOWN_CMD);
          break;
      }
    } catch {
      console.log(CLI_PHRASES.EXECUTION_ERR);
    }
  });
};

initialization();
