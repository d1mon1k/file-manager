import fs from 'fs/promises';
import { CLI_PHRASES } from '../../constants/cli-phrases.js';
import currentPathInstance from '../../repositories/current-path-instance.js';

const ENTITY_TYPE = {
  FILE: 'file',
  DIR: 'directory',
};

const listItems = async () => {
  try {
    const currentPath = currentPathInstance.getPath();
    const entities = await fs.readdir(currentPath, { withFileTypes: true });
    const table = entities.map(dirent => {
      return dirent.isFile()
        ? { Name: dirent.name, Type: ENTITY_TYPE.FILE }
        : { Name: dirent.name, Type: ENTITY_TYPE.DIR };
    });

    const sortedTable = table.sort((a, b) => {
      if (a.Type === b.Type) {
        return a.Name.localeCompare(b.Name);
      } else {
        return a.Type === ENTITY_TYPE.DIR ? -1 : 1;
      }
    });

    console.table(sortedTable);
  } catch {
    console.log(CLI_PHRASES.EXECUTION_ERR);
  }
};

export default listItems;
