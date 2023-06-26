import path from 'node:path';
import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import currentPathInstance from '../../repositories/current-path-instance.js';

const calculateHash = newPath => {
  return new Promise((res, rej) => {
    const currentPath = currentPathInstance.getPath();
    const resolvedPath = path.resolve(currentPath, newPath);
    const fileName = path.basename(resolvedPath);
    const hash = createHash('sha256');
    const readableStream = createReadStream(resolvedPath);

    readableStream.on('error', rej);

    readableStream.on('readable', () => {
      const contents = readableStream.read();
      if (contents) {
        hash.update(contents);
      } else {
        const countedHashLine = `${hash.digest('hex')} ${fileName}`;
        console.log(countedHashLine);
        res();
      }
    });
  });
};

export default calculateHash;
