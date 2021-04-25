import 'chai';
import {expect} from 'chai';
import {Note} from '../src/Note'
import {NoteGestor} from '../src/NoteGestor'

describe('check Note class', () => {
  let noteGestor = new NoteGestor();
  it('Comprobación de si noteGestor es de la clase NoteGestor', () => {
    expect(noteGestor).to.be.an.instanceOf(NoteGestor);
  });
});

describe('check addNote function de la clase NoteGestor', () => {
  let noteGestor = new NoteGestor();
  let note = new Note("Titulo", "Esto es una nota", "Rojo");
  let note2 = new Note("Titulo2", "Esto es una nota", "Rojo");
  it('Comprobación de addNote sin existir directorio', () => {
    noteGestor.addNote("Bruno", note)
  });
  it('Comprobación de addNote con directorio y archivo creado', () => {
    noteGestor.addNote("Bruno", note)
  });
  it('Comprobación de addNote con directorio y archivo sin crear', () => {
    noteGestor.addNote("Bruno", note2)
  });
});

describe('check listNote function de la clase NoteGestor', () => {
  let noteGestor = new NoteGestor();
  it('Comprobación de listNote si existe el directorio', () => {
    noteGestor.listNote("Bruno")
  });
  it('Comprobación de listNote si no existe el directorio', () => {
    noteGestor.listNote("Segredo")
  });
});

describe('check modifyNote function de la clase NoteGestor', () => {
  let noteGestor = new NoteGestor();
  let note = new Note("Titulo", "Esto es una nota modificada", "Verde");
  let note2 = new Note("Titulo3", "Esto es una nota modificada", "Verde");
  it('Comprobación de modifyNote si el directorio y el archivo existe', () => {
    noteGestor.modifyNote("Bruno", note)
  });
  it('Comprobación de modifyNote si el directorio existe y el archivo no existe', () => {
    noteGestor.modifyNote("Bruno", note2)
  });
  it('Comprobación de modifyNote si el directorio no existe', () => {
    noteGestor.modifyNote("Segredo", note)
  });
});

describe('check readNote function de la clase NoteGestor', () => {
  let noteGestor = new NoteGestor();
  it('Comprobación de readNote si existe el directorio y el archivo también', () => {
    noteGestor.readNote("Bruno", "Titulo")
  });
  it('Comprobación de readNote si existe el directorio y el archivo no', () => {
    noteGestor.readNote("Bruno", "Titulo3")
  });
  it('Comprobación de readNote si no existe el directorio', () => {
    noteGestor.readNote("Segredo", "Titulo")
  });
});

describe('check removeNote function de la clase NoteGestor', () => {
  let noteGestor = new NoteGestor();
  it('Comprobación de removeNote si existen los archivos', () => {
    noteGestor.removeNote("Bruno", "Titulo")
    noteGestor.removeNote("Bruno", "Titulo2")
  });
  it('Comprobación de removeNote si no existen los archivos', () => {
    noteGestor.removeNote("Bruno", "Titulo")
    noteGestor.removeNote("Bruno", "Titulo2")
  });
  it('Comprobación de removeNote si no existen el directorio', () => {
    noteGestor.removeNote("Segredo", "Titulo")
    noteGestor.removeNote("Segredo", "Titulo2")
  });
});

