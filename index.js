import readDirectory from './src/operations/read-dir.js';
import __root from './src/constants/root-path.js';
import { CLI_PHRASES } from './src/constants/cli-phrases.js';
import { COMMANDS } from './src/constants/commands.js';

process.stdin.on('data', async chunk => {
  try {
    const command = chunk.toString().trim();

    switch (command) {
      case COMMANDS.LS:
        await readDirectory(__root);
    }
  } catch {
    console.log(CLI_PHRASES.EXECUTION_ERR);
  }
});
