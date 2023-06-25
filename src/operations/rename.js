import { CLI_PHRASES } from '../constants/cli-phrases.js';
import path from 'path';
import fs from 'node:fs/promises';

const rename = async (currentPath, paths) => {
  try {
    const resolvedOldPath = path.resolve(currentPath, paths[0]);
    const newPath = resolvedOldPath.replace(
      path.basename(resolvedOldPath),
      paths[1],
    );

    await fs.stat(newPath).then(
      () => {
        throw new Error();
      },
      () => {},
    );

    await fs.rename(resolvedOldPath, newPath);
  } catch {
    console.log(CLI_PHRASES.EXECUTION_ERR);
  }
};

export default rename;
