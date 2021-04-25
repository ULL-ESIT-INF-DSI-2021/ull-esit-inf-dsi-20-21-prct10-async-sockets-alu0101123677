import {Note} from './Note'
import * as fs from 'fs';
import * as chalk from 'chalk'
import { error } from 'node:console';

export class NoteGestor {
  constructor(){}

  addNote(user: string, note: Note) {
    let path: string = 'data_base/' + user;
    if (fs.existsSync(path)) {
      console.log("El directorio existe");
      if (fs.existsSync(path + "/" + note.getTitle() + '.json'))
        console.log(chalk.red("El fichero ya existe"));
      else {
        /**
        * PONER CODIGO
        */
        console.log(chalk.green("El fichero se ha creado"));
      }
    }
    else {
      console.log("El directorio no existe");
      fs.mkdirSync(path);

      /**
      * PONER CODIGO
      */
      console.log(chalk.green("El fichero se ha creado"));
    }
  }

  listNote(user: string) {
    let path: string = 'data_base/' + user;
    if (fs.existsSync(path)) {
      console.log("El directorio existe");
      /**
      * Poner codigo
      */
    }
    else
      console.log(chalk.red("El directorio no existe"));
  }

  modifyNote(user: string, note: Note) {
    let path: string = 'data_base/' + user;
    if (fs.existsSync(path)) {
      console.log("El directorio existe");
      /**
      * Poner codigo
      */
    }
    else
      console.log(chalk.red("El directorio no existe"));
  }

  readNote(user: string, title: string) {
    let path: string = 'data_base/' + user;
    if (fs.existsSync(path)) {
      console.log("El directorio existe");
      /**
      * Poner codigo
      */
    }
    else
      console.log(chalk.red("El directorio no existe"));
  }

  removeNote(user: string, title: string) {
    let path: string = 'data_base/' + user;
    if (fs.existsSync(path)) {
      console.log("El directorio existe");
      /**
      * Poner codigo
      */
    }
    else
      console.log(chalk.red("El directorio no existe"));
  }
}