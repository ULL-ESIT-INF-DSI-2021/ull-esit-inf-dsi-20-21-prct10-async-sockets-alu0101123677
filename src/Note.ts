type Color = 'Rojo' | 'Verde' | 'Azul' | 'Amarillo'

export class Note {
  constructor(protected title: string, protected body: string, protected color: string){}

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

  setColor(color: string) {
    this.color = color
  }
}