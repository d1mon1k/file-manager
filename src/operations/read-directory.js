import fs from 'fs/promises';
import { CLI_PHRASES } from '../constants/cli-phrases.js';

const ENTITY_TYPE = {
  FILE: 'file',
  DIR: 'directory',
};

const readDirectory = async path => {
  try {
    const entities = await fs.readdir(path, { withFileTypes: true });
    const table = entities.map(dirent => {
      return dirent.isFile()
        ? { Name: dirent.name, Type: ENTITY_TYPE.FILE }
        : { Name: dirent.name, Type: ENTITY_TYPE.DIR };
    });

    console.table(table);
  } catch {
    console.log(CLI_PHRASES.EXECUTION_ERR);
  }
};

export default readDirectory;
