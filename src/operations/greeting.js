import { CLI_ARGS_KEYS } from '../constants/cli-args-keys.js';
import { CLI_PHRASES } from '../constants/cli-phrases.js';

const greeting = () => {
  const argsArr = process.argv.slice(3);
  const argsEntries = argsArr.map(a => a.replace('--', '').split('='));
  const argsObj = Object.fromEntries(argsEntries);
  const userName = argsObj[CLI_ARGS_KEYS.USERNAME] ?? 'Anonymous';
  const greetingLine = `${CLI_PHRASES.GREETING} ${userName}!`;

  console.log(greetingLine);
};

export default greeting;
