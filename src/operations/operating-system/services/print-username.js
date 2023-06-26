import os from 'node:os';

const printUsername = () => console.log(os.userInfo().username);

export default printUsername;
