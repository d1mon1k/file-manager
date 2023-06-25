import { isAbsolute, resolve } from 'node:path';

const resolvePath = (currentPath, newPath) => {
  console.warn('deprecated method, use node.js path.resolve method instead');
  return isAbsolute(newPath) ? newPath : resolve(currentPath, newPath);
};

export default resolvePath;
