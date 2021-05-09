import * as chalk from 'chalk'

/**
 * Clase Note que define un objeto que representa una nota.
 * Cuenta con tres atributos y 8 métodos
 * 
 * @param title de tipo string que representa el titulo de la nota
 * @param body es de tipo string que representa el contenido de la nota
 * @param color es de tipo string que representa el color de la nota
 */
export class Note {
  constructor(protected title: string, protected body: string, protected color: string){}
  
  /**
   * Método getTitle, getter para el parametro title
   * @returns el titulo de la nota
   */
  getTitle(): string{
    return this.title;
  }
  
  /**
   * Método getBody, getter para el parametro body
   * @returns retorna el cuerpo de la nota
   */
  getBody(): string{
    return this.body;
  }
  
  /**
   * Método getColor, getter para el parametro color
   * @returns retorna el color de la nota
   */
  getColor(): string{
    return this.color
  }
  
  /**
   * Método setTitle, setter para el parametro title
   * @param title que guarda el nuevo titulo
   */
  setTitle(title: string) {
    this.title = title;
  }
  
  /**
   * Método setBody, setter para el parametro body
   * @param body que guarda el nuevo cuerpo
   */
  setBody(body: string) {
    this.body = body;
  }
  
  /**
   * Método setColor, setter para el parametro color
   * @param color que guarda el nuevo color
   */
  setColor(color: string) {
    this.color = color
  }
  
  /**
   * Método printTitle que imprime el titulo según el color de la nota
   */
  printTitle(): string{
    let result = '';
    switch (this.color) {
      case "Rojo":
        result = chalk.red(this.title);
        break;
      case "Verde":
        result = chalk.green(this.title);
        break;
      case "Azul":
        result = chalk.blue(this.title);
        break;
      case "Amarillo":
        result = chalk.yellow(this.title);
        break;
      default:
        result = "Color no valido, se le asigna el rojo, ";
        result = result + chalk.red(this.title);
        break;
    }
    return result;
  }
  
  /**
   * Método printBody que imprime el cuerpo según el color de la nota
   */
  printBody(): string{
    let result: string = ''
    switch (this.color) {
      case "Rojo":
        result = chalk.red(this.body);
        break;
      case "Verde":
        result = chalk.green(this.body);
        break;
      case "Azul":
        result = chalk.blue(this.body);
        break;
      case "Amarillo":
        result = chalk.yellow(this.body);
        break;
      default:
        result = "Color no valido, se le asigna el rojo, ";
        result = result + chalk.red(this.body);
        break;
    }
    return result;
  }
}


