import { createReadStream } from 'node:fs';
import path from 'path';

const outputFileContents = (currentPath, newPath) => {
  return new Promise((res, rej) => {
    const resolvedPath = path.resolve(currentPath, newPath);
    const readableStream = createReadStream(resolvedPath);

    readableStream.pipe(process.stdout);

    readableStream.on('end', () => res());
    readableStream.on('error', () => rej());
  });
};

export default outputFileContents;
