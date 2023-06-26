import path from 'path';
import { createReadStream, createWriteStream } from 'node:fs';
import fs from 'fs/promises';

const moveFile = (currentPath, paths) => {
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
      copyFilePipe.on('finish', () => fs.rm(resolvedOldPath).then(res, rej));
    });
  });
};

export default moveFile;

// TODO: combine similar logic into a separate function between copy-file and move-file
