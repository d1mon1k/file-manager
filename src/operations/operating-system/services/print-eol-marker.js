import os from 'node:os';

const printEolMarker = () => console.log(JSON.stringify(os.EOL));

export default printEolMarker;
