const processTerminalCmd = cmd => {
  return cmd
    .toString()
    .trim()
    .split(' ')
    .map(c => c.trim());
};

export default processTerminalCmd;
