import { createReadStream, createWriteStream } from 'node:fs';
import path from 'path';

const copyFile = (currentPath, paths) => {
  return new Promise((res, rej) => {
    const resolvedOldPath = path.resolve(currentPath, paths[0]);
    const resolvedNewPath = path.resolve(currentPath, paths[1]);
    const readableStream = createReadStream(resolvedOldPath);
    const writableStream = createWriteStream(resolvedNewPath);
    const copyFilePipe = readableStream.pipe(writableStream);

    copyFilePipe.on('end', () => res());
    copyFilePipe.on('error', () => rej());
  });
};

export default copyFile;
