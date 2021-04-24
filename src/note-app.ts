import {Note} from './Note'
import * as yargs from 'yargs';

yargs.command({
  command: 'add',
  describe: 'Añade una nueva nota',
  builder: {
    title: {
      describe: 'Titulo de la nota',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Cuerpo de la nota',
      demandOption: true,
      type: 'string'
    },
    Color: {
      describe: 'Color de la nota',
      demandOption: true,
      type: 'string'
    },
  },
  handler(argv) {

  },
});
