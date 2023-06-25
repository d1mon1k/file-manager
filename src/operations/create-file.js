import fs from 'node:fs/promises';
import { CLI_PHRASES } from '../constants/cli-phrases.js';
import path from 'path';

const createFile = async (currentPath, newPath) => {
  try {
    const resolvedPath = path.resolve(currentPath, newPath);
    await fs.writeFile(resolvedPath, '', { flag: 'ax' });
  } catch {
    console.log(CLI_PHRASES.EXECUTION_ERR);
  }
};

export default createFile;
