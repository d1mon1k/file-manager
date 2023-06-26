import os from 'node:os';
import currentPath from './src/repositories/current-path.js';
import exit from './src/operations/basic/exit.js';
import handleExit from './src/handlers/exit-handler.js';
import handleData from './src/handlers/data-handler.js';
import greetUser from './src/operations/basic/greet-user.js';

const initialization = async () => {
  greetUser();

  await currentPath.setPath(os.homedir());

  process.stdin.on('data', handleData);
  process.on('exit', handleExit);
  process.on('SIGINT', process.exit);
};

initialization();

/* TODO: At the start of the program and after each end of input/operation current working
     directory should be printed in following way: You are currently in path_to_working_directory */

/* TODO: By default program should prompt user in console to print commands and wait for results */

/* TODO: In case of unknown operation or invalid input (missing mandatory arguments, wrong data
     in arguments, etc.) Invalid input message should be shown and user should be able to enter
      another command */

/* TODO: In case of error during execution of operation Operation failed message should be shown
     and user should be able to enter another command (e.g. attempt to perform an operation on
      a non-existent file or work on a non-existent path should result in the operation fail)  */
