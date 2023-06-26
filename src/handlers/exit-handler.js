import replaceWordPlaceholder from '../utils/replace-word-placeholder.js';
import { CLI_PHRASES } from '../constants/cli-phrases.js';
import user from '../repositories/user.js';

const handleExit = () => {
  const farewellLine = replaceWordPlaceholder(
    CLI_PHRASES.FAREWELL,
    user.getName(),
  );
  console.log(farewellLine);
};

export default handleExit;
