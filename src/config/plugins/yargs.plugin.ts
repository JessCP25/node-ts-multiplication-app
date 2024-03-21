import yargs from 'yargs/yargs';
import { hideBin} from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
.parseSync();