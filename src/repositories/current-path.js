import fs from 'fs/promises';
import { CLI_PHRASES } from '../constants/cli-phrases.js';
import resolvePath from '../utils/resolve-path.js';

class CurrentPath {
  constructor() {
    this.currentPath = '';
  }

  getPath() {
    return this.currentPath;
  }

  async setPath(path) {
    try {
      const resolvedPath = resolvePath(this.currentPath, path);

      await fs.readdir(resolvedPath);

      this.currentPath = resolvedPath;
      const currentPathNotify = CLI_PHRASES.CURRENT_PATH + this.currentPath;

      console.log(currentPathNotify);
    } catch {
      console.log(CLI_PHRASES.EXECUTION_ERR);
    }
  }
}

const currentPath = new CurrentPath();
export default currentPath;
