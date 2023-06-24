import greeting from './src/operations/greeting.js';
import os from 'node:os';
import currentPath from './src/repositories/current-path.js';
import exit from './src/operations/exit.js';
import handleExit from './src/handlers/exit-handler.js';
import handleData from './src/handlers/data-handler.js';

const initialization = async () => {
  greeting();

  await currentPath.setCurrentPath(os.homedir());

  process.stdin.on('data', handleData);
  process.on('exit', handleExit);
  process.on('SIGINT', process.exit);
};

initialization();
