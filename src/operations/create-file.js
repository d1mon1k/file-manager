import fs from 'node:fs/promises';
import resolvePath from '../utils/resolve-path.js';
import { CLI_PHRASES } from '../constants/cli-phrases.js';

const createFile = async (currentPath, newPath) => {
  try {
    const resolvedPath = resolvePath(currentPath, newPath);
    await fs.writeFile(resolvedPath, '', { flag: 'ax' });
  } catch {
    console.log(CLI_PHRASES.EXECUTION_ERR);
  }
};

export default createFile;
