import 'chai';
import {expect} from 'chai';
import {Note} from '../src/Note'

describe('check Note class', () => {
  let note = new Note("Nota roja", "Esto es una nota roja", "Rojo");
  it('Comprobación de si note01 es de la clase Plantel', () => {
    expect(note).to.be.an.instanceOf(Note);
  });
});

describe('check getTitle and setTitle of Note class', () => {
  let note = new Note("Nota roja", "Esto es una nota roja", "Rojo");
  note.setTitle("Nota carmesi");
  it('Comprobación getTitle es igual a "Note carmesi"', () => {
    expect(note.getTitle()).to.be.eql('Nota carmesi');
  }); 
});

describe('check getBody and setBody of Note class', () => {
  let note = new Note("Nota roja", "Esto es una nota roja", "Rojo");
  note.setBody("Esto es una nota carmesi");
  it('Comprobación getBody es igual a "Esto es una nota carmesi"', () => {
    expect(note.getBody()).to.be.eql('Esto es una nota carmesi');
  }); 
});

describe('check getColor and setColor of Note class', () => {
  let note = new Note("Nota roja", "Esto es una nota roja", "Rojo");
  note.setColor("Azul");
  it('Comprobación getColor es igual a "Azul"', () => {
    expect(note.getColor()).to.be.eql('Azul');
  }); 
});

describe('check printTitle of Note class', () => {
  let note01 = new Note("Nota roja", "Esto es una nota roja", "Rojo");
  let note02 = new Note("Nota azul", "Esto es una nota azul", "Azul");
  let note03 = new Note("Nota verde", "Esto es una nota roja", "Verde");
  let note04 = new Note("Nota amarilla", "Esto es una nota roja", "Amarillo");
  it('Comprobación printTitle para rojo', () => {
    note01.printTitle();
  }); 
  it('Comprobación printTitle para azul', () => {
    note02.printTitle();
  }); 
  it('Comprobación printTitle para verde', () => {
    note03.printTitle();
  }); 
  it('Comprobación printTitle para amarillo', () => {
    note04.printTitle();
  }); 
});


describe('check printBody of Note class', () => {
  let note01 = new Note("Nota roja", "Esto es una nota roja", "Rojo");
  let note02 = new Note("Nota azul", "Esto es una nota azul", "Azul");
  let note03 = new Note("Nota verde", "Esto es una nota roja", "Verde");
  let note04 = new Note("Nota amarilla", "Esto es una nota roja", "Amarillo");
  it('Comprobación printBody para rojo', () => {
    note01.printBody();
  }); 
  it('Comprobación printBody para azul', () => {
    note02.printBody();
  }); 
  it('Comprobación printBody para verde', () => {
    note03.printBody();
  }); 
  it('Comprobación printBody para amarillo', () => {
    note04.printBody();
  }); 
});