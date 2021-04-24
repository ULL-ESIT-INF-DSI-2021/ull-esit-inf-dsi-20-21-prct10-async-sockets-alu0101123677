import * as chalk from 'chalk'
type Color = 'Rojo' | 'Verde' | 'Azul' | 'Amarillo'


export class Note {
  constructor(protected title: string, protected body: string, protected color: Color){}

  getTitle(): string{
    return this.title;
  }

  getBody(): string{
    return this.body;
  }

  getColor(): string{
    return this.color
  }

  setTitle(title: string) {
    this.title = title;
  }

  setBody(body: string) {
    this.body = body;
  }

  setColor(color: Color) {
    this.color = color
  }

  printTitle(){
    switch (this.color) {
      case "Rojo":
        console.log(chalk.red(this.title));
        break;
      case "Verde":
        console.log(chalk.green(this.title));
        break;
      case "Azul":
        console.log(chalk.blue(this.title));
        break;
      case "Amarillo":
        console.log(chalk.yellow(this.title));
        break;
      default:
        console.log(chalk.red("Color no valido para la nota"));
        break;
    }
  }

  printBody(){
    switch (this.color) {
      case "Rojo":
        console.log(chalk.red(this.body));
        break;
      case "Verde":
        console.log(chalk.green(this.body));
        break;
      case "Azul":
        console.log(chalk.blue(this.body));
        break;
      case "Amarillo":
        console.log(chalk.yellow(this.body));
        break;
      default:
        console.log(chalk.red("Color no valido para la nota"));
        break;
    }
  }
}


