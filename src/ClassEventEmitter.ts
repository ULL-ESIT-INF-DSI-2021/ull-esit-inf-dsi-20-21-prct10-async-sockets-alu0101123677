import {EventEmitter} from 'events';

/**
 * Clase que hereda de EventEmitter, utilizada tanto por el cliente como
 * por el servidor para recibir los mensajes completos.
 */
export class ClassEventEmitter extends EventEmitter {
  constructor(connection: EventEmitter) {
    super();

    let data = '';
    connection.on('data', (chunk) => {
      data += chunk;
    });

    connection.on('end', () => {
      const message = JSON.parse(data.toString());
      this.emit('message', message);
    });
  }   
}