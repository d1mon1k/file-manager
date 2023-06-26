import fs from 'fs/promises';
import { CLI_PHRASES } from '../constants/cli-phrases.js';
import path from 'path';

class CurrentPath {
  constructor() {
    this.currentPath = '';
  }

  getPath() {
    return this.currentPath;
  }

  async setPath(newPath) {
    try {
      const resolvedPath = path.resolve(this.currentPath, newPath);
      await fs.readdir(resolvedPath);
      this.currentPath = resolvedPath;
    } catch {
      console.log(CLI_PHRASES.EXECUTION_ERR);
    }
  }
}

const currentPathInstance = new CurrentPath();
export default currentPathInstance;
