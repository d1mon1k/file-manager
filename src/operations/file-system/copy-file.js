import { createReadStream, createWriteStream } from 'node:fs';
import path from 'path';
import fs from 'fs/promises';

const copyFile = (currentPath, paths) => {
  return new Promise((res, rej) => {
    const fileName = path.basename(paths[0]);
    const resolvedOldPath = path.resolve(currentPath, paths[0]);
    const resolvedNewPath = path.resolve(currentPath, paths[1], fileName);

    fs.stat(resolvedNewPath).then(rej, () => {
      const readableStream = createReadStream(resolvedOldPath);
      const writableStream = createWriteStream(resolvedNewPath);
      const copyFilePipe = readableStream.pipe(writableStream);

      readableStream.on('error', rej);
      writableStream.on('error', rej);
      copyFilePipe.on('error', () => rej);
      copyFilePipe.on('finish', () => res);
    });
  });
};

export default copyFile;

// TODO: combine similar logic into a separate function between copy-file and move-file
