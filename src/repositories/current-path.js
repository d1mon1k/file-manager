import fs from 'fs/promises';
import { CLI_PHRASES } from '../constants/cli-phrases.js';
import { resolve, isAbsolute } from 'node:path';

class CurrentPath {
  constructor() {
    this.currentPath = '';
  }

  getCurrentPath() {
    return this.currentPath;
  }

  async setCurrentPath(path) {
    try {
      const resolvedPath = !isAbsolute(path)
        ? resolve(this.currentPath, path)
        : path;

      await fs.readdir(resolvedPath);

      this.currentPath = resolvedPath;
      const currentPathNotify = CLI_PHRASES.CURRENT_PATH + this.currentPath;

      console.log(currentPathNotify);
    } catch {
      console.log(CLI_PHRASES.EXECUTION_ERR);
    }
  }
}

export default CurrentPath;
