import { OS_ARGUMENTS } from '../../constants/os-arguments.js';
import { CLI_PHRASES } from '../../constants/cli-phrases.js';
import printEolMarker from './services/print-eol-marker.js';
import printCpus from './services/print-cpus.js';
import printHomedir from './services/print-homedir.js';
import printUsername from './services/print-username.js';
import printArch from './services/print-arch.js';

const showSystemInfo = arg => {
  switch (arg) {
    case OS_ARGUMENTS.EOL:
      printEolMarker();
      break;

    case OS_ARGUMENTS.CPUS:
      printCpus();
      break;

    case OS_ARGUMENTS.HOME_DIR:
      printHomedir();
      break;

    case OS_ARGUMENTS.USER_NAME:
      printUsername();
      break;

    case OS_ARGUMENTS.ARCHITECTURE:
      printArch();
      break;

    default:
      console.log(CLI_PHRASES.UNKNOWN_CMD);
      break;
  }
};

export default showSystemInfo;
