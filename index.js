import os from 'node:os';
import currentPathInstance from './src/repositories/current-path-instance.js';
import exit from './src/operations/basic/exit.js';
import handleExit from './src/handlers/exit-handler.js';
import handleData from './src/handlers/data-handler.js';
import greetUser from './src/operations/basic/greet-user.js';
import printCurrentPath from './src/operations/basic/print-current-path.js';

const initialization = async () => {
  greetUser();

  await currentPathInstance.setPath(os.homedir());
  printCurrentPath();

  process.stdin.on('data', handleData);

  process.on('exit', handleExit);
  process.on('SIGINT', process.exit);
};

initialization();
