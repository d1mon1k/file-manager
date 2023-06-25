import resolvePath from '../utils/resolve-path.js';
import { createReadStream } from 'node:fs';

const outputFileContents = (currentPath, newPath) => {
  return new Promise((res, rej) => {
    const resolvedPath = resolvePath(currentPath, newPath);
    const readableStream = createReadStream(resolvedPath);

    readableStream.pipe(process.stdout);

    readableStream.on('end', () => res());
    readableStream.on('error', () => rej());
  });
};

export default outputFileContents;
