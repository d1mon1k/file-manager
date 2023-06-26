import replaceWordPlaceholder from '../../utils/replace-word-placeholder.js';
import { CLI_PHRASES } from '../../constants/cli-phrases.js';
import currentPathInstance from '../../repositories/current-path-instance.js';

const printCurrentPath = () => {
  const currentPathNotify = replaceWordPlaceholder(
    CLI_PHRASES.CURRENT_PATH,
    currentPathInstance.getPath(),
  );

  console.log(currentPathNotify);
};

export default printCurrentPath;
