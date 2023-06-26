import { createReadStream, createWriteStream } from 'node:fs';
import path from 'path';
import fs from 'fs/promises';
import currentPathInstance from '../../repositories/current-path-instance.js';

const copyFile = paths => {
  return new Promise((res, rej) => {
    const currentPath = currentPathInstance.getPath();
    const fileName = path.basename(paths[0]);
    const resolvedOldPath = path.resolve(currentPath, paths[0]);
    const resolvedNewPath = path.resolve(currentPath, paths[1], fileName);

    fs.stat(resolvedNewPath).then(rej, () => {
      const readableStream = createReadStream(resolvedOldPath);
      const writableStream = createWriteStream(resolvedNewPath);
      readableStream.pipe(writableStream);

      writableStream.on('close', res);
      readableStream.on('error', rej);
      writableStream.on('error', rej);
    });
  });
};

export default copyFile;
