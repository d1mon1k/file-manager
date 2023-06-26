import fs from 'node:fs/promises';
import { CLI_PHRASES } from '../../constants/cli-phrases.js';
import path from 'path';
import currentPathInstance from '../../repositories/current-path-instance.js';

const createFile = async newPath => {
  try {
    const currentPath = currentPathInstance.getPath();
    const resolvedPath = path.resolve(currentPath, newPath);
    await fs.writeFile(resolvedPath, '', { flag: 'ax' });
  } catch {
    console.log(CLI_PHRASES.EXECUTION_ERR);
  }
};

export default createFile;
