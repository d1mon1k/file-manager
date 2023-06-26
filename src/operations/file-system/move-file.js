import path from 'path';
import fs from 'fs/promises';
import currentPathInstance from '../../repositories/current-path-instance.js';
import copyFile from './copy-file.js';
import { CLI_PHRASES } from '../../constants/cli-phrases.js';

const moveFile = async paths => {
  try {
    const currentPath = currentPathInstance.getPath();
    const resolvedOldPath = path.resolve(currentPath, paths[0]);

    await copyFile(paths);
    await fs.rm(resolvedOldPath);
  } catch {
    console.log(CLI_PHRASES.EXECUTION_ERR);
  }
};

export default moveFile;
