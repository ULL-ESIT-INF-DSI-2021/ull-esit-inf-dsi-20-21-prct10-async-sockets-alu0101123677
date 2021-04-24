import {Note} from './Note'
import {NoteGestor} from './NoteGestor'
import * as yargs from 'yargs';

yargs.command({
  command: 'add',
  describe: 'Añade una nueva nota',
  builder: {
    user: {
      describe: 'Usuario de la nota',
      demandOption: true,
      type: 'string',
    },
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
    color: {
      describe: 'Color de la nota',
      demandOption: true,
      type: 'string'
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string' && typeof argv.title === 'string' && typeof argv.body === 'string' &&
        typeof argv.color === 'string') {
      let note = new Note(argv.title, argv.body, argv.color);
    }
  },
});

yargs.command({
  command: 'modify',
  describe: 'Modifica una nueva nota',
  builder: {
    user: {
      describe: 'Usuario de la nota',
      demandOption: true,
      type: 'string',
    },
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
    color: {
      describe: 'Color de la nota',
      demandOption: true,
      type: 'string'
    },
  },
  handler(argv) {
    console.log('añadir')
  },
});

yargs.command({
  command: 'list',
  describe: 'List las notas de un usuario',
  builder: {
    user: {
      describe: 'Usuario de la notas',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    console.log('listado')
  },
});


yargs.command({
  command: 'read',
  describe: 'Lee la nota de un usuario',
  builder: {
    user: {
      describe: 'Usuario de la nota',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Titulo de la nota',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    console.log('leer')
  },
});

yargs.command({
  command: 'remove',
  describe: 'Eliminar la nota de un usuario',
  builder: {
    user: {
      describe: 'Usuario de la nota',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Titulo de la nota',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    console.log('remover')
  },
});

yargs.parse();
