import { OS_ARGUMENTS } from '../../constants/os-arguments.js';
import { CLI_PHRASES } from '../../constants/cli-phrases.js';
import printEolMarker from './services/print-eol-marker.js';
import printCpus from './services/print-cpus.js';
import printHomedir from './services/print-homedir.js';
import printUsername from './services/print-username.js';
import printArch from './services/print-arch.js';

const osArgumentsMap = new Map([
  [OS_ARGUMENTS.EOL, printEolMarker],
  [OS_ARGUMENTS.CPUS, printCpus],
  [OS_ARGUMENTS.HOME_DIR, printHomedir],
  [OS_ARGUMENTS.USER_NAME, printUsername],
  [OS_ARGUMENTS.ARCHITECTURE, printArch],
]);

const showSystemInfo = arg => {
  const service = osArgumentsMap.get(arg);
  service ? service() : console.log(CLI_PHRASES.UNKNOWN_CMD);
};

export default showSystemInfo;
