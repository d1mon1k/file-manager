import { isAbsolute, resolve } from 'node:path';

const resolvePath = (currentPath, newPath) =>
  isAbsolute(newPath) ? newPath : resolve(currentPath, newPath);

export default resolvePath;
