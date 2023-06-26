import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const __root = path.resolve(__dirname, '../..');

export default __root;
