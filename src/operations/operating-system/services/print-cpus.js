import os from 'node:os';
import { CLI_PHRASES } from '../../../constants/cli-phrases.js';
import replaceWordPlaceholder from '../../../utils/replace-word-placeholder.js';

const printCpus = () => {
  const cpusData = os.cpus();

  const preparedCpusData = cpusData.map(
    (e, i) =>
      `CPU ${i + 1}: Model: ${e.model}, ClockRate: ${e.speed / 1000}GHz`,
  );

  const cpusAmountLine = replaceWordPlaceholder(
    CLI_PHRASES.CPUS_AMOUNT,
    cpusData.length,
  );

  console.log(cpusAmountLine);
  preparedCpusData.forEach(cpu => console.log(cpu));
};

export default printCpus;
