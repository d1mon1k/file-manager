import { createReadStream } from 'node:fs';
import path from 'path';
import currentPathInstance from '../../repositories/current-path-instance.js';
import { CLI_PHRASES } from '../../constants/cli-phrases.js';

const outputFileContents = newPath => {
  return new Promise((res, rej) => {
    const currentPath = currentPathInstance.getPath();
    const resolvedPath = path.resolve(currentPath, newPath);
    const readableStream = createReadStream(resolvedPath);

    process.stdout.write(CLI_PHRASES.FILE_START);
    readableStream.pipe(process.stdout);

    readableStream.on('error', rej);
    readableStream.on('end', () => {
      process.stdout.write(CLI_PHRASES.FILE_END);
      res();
    });
  });
};

export default outputFileContents;
