import { CLI_ARGS_KEYS } from '../../constants/cli-args-keys.js';
import { CLI_PHRASES } from '../../constants/cli-phrases.js';
import user from '../../repositories/user.js';
import replaceWordPlaceholder from '../../utils/replace-word-placeholder.js';

const getUserNameFromArgv = () => {
  const argsArr = process.argv.slice(3);
  const argsEntries = argsArr.map(a => a.replace('--', '').split('='));
  const argsObj = Object.fromEntries(argsEntries);
  const userName = argsObj[CLI_ARGS_KEYS.USERNAME] ?? 'Anonymous';

  return userName;
};

const greetUser = () => {
  const name = getUserNameFromArgv();
  const greetingLine = replaceWordPlaceholder(CLI_PHRASES.GREETING, name);

  user.setName(name);
  console.log(greetingLine);
};

export default greetUser;
