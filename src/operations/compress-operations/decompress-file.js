import path from 'node:path';
import { createReadStream, createWriteStream } from 'node:fs';
import fs from 'node:fs/promises';
import { createBrotliDecompress } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import currentPathInstance from '../../repositories/current-path-instance.js';

const decompressFile = paths => {
  return new Promise((res, rej) => {
    const currentPath = currentPathInstance.getPath();
    const fileName = path.basename(paths[0], path.extname(paths[0]));
    // prettier-ignore
    const resolvedNewPath = path.resolve(currentPath, paths[1], `${fileName}`);
    const resolvedOldPath = path.resolve(currentPath, paths[0]);

    fs.stat(resolvedNewPath).then(rej, () => {
      const readableStream = createReadStream(resolvedOldPath);
      const writableStream = createWriteStream(resolvedNewPath);
      const decompressStream = createBrotliDecompress();

      const pipe = pipeline(readableStream, decompressStream, writableStream);
      pipe.then(res, rej);

      readableStream.on('error', rej);
      writableStream.on('error', rej);
      decompressStream.on('error', rej);
    });
  });
};

export default decompressFile;
