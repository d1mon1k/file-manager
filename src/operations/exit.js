import { CLI_PHRASES } from '../constants/cli-phrases.js';

const exit = async () => {
  try {
    process.exit();
  } catch {
    console.log(CLI_PHRASES.EXECUTION_ERR);
  }
};

export default exit;
