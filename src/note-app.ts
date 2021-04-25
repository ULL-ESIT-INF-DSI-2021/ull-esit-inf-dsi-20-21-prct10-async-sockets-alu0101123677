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
      let noteGestor = new NoteGestor();
      noteGestor.addNote(argv.user, note);
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
    if (typeof argv.user === 'string' && typeof argv.title === 'string' && typeof argv.body === 'string' &&
    typeof argv.color === 'string') {
    let note = new Note(argv.title, argv.body, argv.color);
    let noteGestor = new NoteGestor();
    noteGestor.modifyNote(argv.user, note);
    }
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
    if (typeof argv.user === 'string') {
    let noteGestor = new NoteGestor();
    noteGestor.listNote(argv.user);
    }
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
    if (typeof argv.user === 'string' && typeof argv.title === 'string') {
    let noteGestor = new NoteGestor();
    noteGestor.readNote(argv.user, argv.title);
    }
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
    if (typeof argv.user === 'string' && typeof argv.title === 'string') {
      let noteGestor = new NoteGestor();
      noteGestor.removeNote(argv.user, argv.title);
    }
  },
});

yargs.parse();
