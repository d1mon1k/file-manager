import fs from 'fs/promises';
import { CLI_PHRASES } from '../../constants/cli-phrases.js';
import path from 'path';

const deleteFile = async (currentPath, newPath) => {
  try {
    const resolvedPath = path.resolve(currentPath, newPath);

    await fs.rm(resolvedPath);
  } catch {
    console.log(CLI_PHRASES.EXECUTION_ERR);
  }
};

export default deleteFile;
