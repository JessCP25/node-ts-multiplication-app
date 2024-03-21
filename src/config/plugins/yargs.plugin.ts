import yargs from 'yargs/yargs';
import { hideBin} from 'yargs/helpers';
import { number } from 'yargs';

export const yarg = yargs(hideBin(process.argv))
.option('b',{
  alias: 'base',
  type: 'number',
  demandOption: true,
  describe: 'Multiplication table base'
})
.option('l', {
  alias: 'limit',
  type: 'number',
  default: 10,
  describe: 'Multiplication'
})
.option('s', {
  alias:'show',
  type: 'boolean',
  default: false,
  describe: 'Show multiplication table'
})
.parseSync();