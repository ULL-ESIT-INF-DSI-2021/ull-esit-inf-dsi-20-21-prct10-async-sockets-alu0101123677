import {Note} from './Note'
import * as fs from 'fs';
import * as chalk from 'chalk'

/**
 * Clase NoteGestor utilizada para realizar el gestionamiento de las notas de un usuario
 */
export class NoteGestor {
  constructor(){}
  
  /**
   * Función addNote que añade una nota en formato json al repositorio de un usuario
   * @param user que guarda el usuario
   * @param note que guarda la nota a ser guardada en formato json
   */
  addNote(user: string, note: Note): string {
    let path: string = 'data_base/' + user;
    let result: string = '';
    if (fs.existsSync(path)) {
      if (fs.existsSync(path + "/" + note.getTitle() + '.json'))
        result = chalk.red("ERROR: El fichero ya existe");
      else {
        let data = {"title": note.getTitle(), "body": note.getBody(), "color": note.getColor()};
        let myData = JSON.stringify(data);
        fs.writeFileSync(path + "/" + note.getTitle() + '.json', myData)
        result = chalk.green("El fichero se ha creado");
      }
    }
    else {
      fs.mkdirSync(path);
      let data = {"title": note.getTitle(), "body": note.getBody(), "color": note.getColor()};
      let myData = JSON.stringify(data);
      fs.writeFileSync(path + "/" + note.getTitle() + '.json', myData)
      result = chalk.green("El fichero se ha creado");
    }
    return result;
  }
  
  /**
   * Función listNote que muestra por terminal los titulos de las notas de un usuario
   * @param user que guarda el usuario
   */
  listNote(user: string) {
    let path: string = 'data_base/' + user;
    if (fs.existsSync(path)) {
      let archivos = fs.readdirSync(path);
      archivos.forEach(archivo => {
        let archivoRaw = fs.readFileSync(path + "/" + archivo, "utf-8");
        let archivoRawNew = JSON.parse(archivoRaw);
        let note = new Note(archivoRawNew["title"], archivoRawNew["body"], archivoRawNew["color"]);
        note.printTitle();
      });
    }
    else
      console.log(chalk.red("ERROR: El directorio no existe"));
  }
  
  /**
   * Función modifyNote que modifica la nota de un usuario
   * @param user que guarda el usuario
   * @param note que guarda la nota para ser modificada
   */
  modifyNote(user: string, note: Note): string {
    let path: string = 'data_base/' + user;
    let result: string = ""
    if (fs.existsSync(path)) {
      if (fs.existsSync(path + "/" + note.getTitle() + ".json")) {
        fs.rmSync(path + "/" + note.getTitle() + ".json");
        let data = {"title": note.getTitle(), "body": note.getBody(), "color": note.getColor()};
        let myData = JSON.stringify(data);
        fs.writeFileSync(path + "/" + note.getTitle() + '.json', myData)
        result = chalk.green("El fichero se ha modificado");
      }
      else
        result = chalk.red("ERROR: El fichero no existe");
    }
    else
      result = chalk.red("ERROR: El directorio no existe");
    return result;
  }
  
  /**
   * Función readNote que lee el contenido de la nota de un usuario
   * @param user que guarda el usuario
   * @param title que guarda el titulo de la nota
   */
  readNote(user: string, title: string) {
    let path: string = 'data_base/' + user;
    if (fs.existsSync(path)) {
      if (fs.existsSync(path + "/" + title + ".json")) {
        let archivoRaw = fs.readFileSync(path + "/" + title + ".json", "utf-8");
        let archivoRawNew = JSON.parse(archivoRaw);
        let note = new Note(archivoRawNew["title"], archivoRawNew["body"], archivoRawNew["color"]);
        note.printTitle();
        note.printBody();
      }
      else
        console.log(chalk.red("ERROR: El archivo no existe"));
    }
    else
      console.log(chalk.red("ERROR: El directorio no existe"));
  }
  
  /**
   * Función removeNote que elimina una nota de un usuario
   * @param user que guarda al usuario
   * @param title que guarda el titulo de la nota
   */
  removeNote(user: string, title: string): string {
    let path: string = 'data_base/' + user;
    let result: string = ''
    if (fs.existsSync(path)) {
      if (fs.existsSync(path + "/" + title + ".json")) {
        fs.rmSync(path + "/" + title + ".json");
        result = chalk.green("El fichero ha sido borrado");
      }
      else
        result = chalk.red("ERROR: El fichero no existe");
    }
    else
      result = chalk.red("ERROR: El directorio no existe");
      
    return result;
  }
}