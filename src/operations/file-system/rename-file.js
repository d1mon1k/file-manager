import { CLI_PHRASES } from '../../constants/cli-phrases.js';
import path from 'path';
import fs from 'node:fs/promises';
import currentPathInstance from '../../repositories/current-path-instance.js';

const renameFile = async paths => {
  try {
    const currentPath = currentPathInstance.getPath();
    const resolvedOldPath = path.resolve(currentPath, paths[0]);
    const newPath = resolvedOldPath.replace(
      path.basename(resolvedOldPath),
      paths[1],
    );

    // prettier-ignore
    await fs.stat(newPath).then(
      () => { throw new Error() },
      () => {},
    );

    await fs.rename(resolvedOldPath, newPath);
  } catch {
    console.log(CLI_PHRASES.EXECUTION_ERR);
  }
};

export default renameFile;
