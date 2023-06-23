import readDirectory from './src/operations/read-directory.js';
import __root from './src/constants/root-path.js';
import { CLI_PHRASES } from './src/constants/cli-phrases.js';
import { COMMANDS } from './src/constants/commands.js';
import greeting from './src/operations/greeting.js';

const initialization = () => {
  greeting();

  process.stdin.on('data', async chunk => {
    try {
      const command = chunk.toString().trim();

      switch (command) {
        case COMMANDS.LS:
          await readDirectory(__root);
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
