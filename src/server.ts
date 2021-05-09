import * as chalk from 'chalk';
import * as net from 'net';
import {ClassEventEmitter} from './ClassEventEmitter';
import {ResponseType} from './types';
import {NoteGestor} from './NoteGestor'
import {Note} from './Note'

/**
 * Servidor encargado de utilizar la clase NoteGestor 
 * Recibe un mensaje del cliente con la solicitud deseada y la procesa mediante un switch
 * para llamar a la función correspondiente de la clase NoteGestor para luego enviarle la 
 * respuesta al cliente.
 */
const server = net.createServer({allowHalfOpen: true}, (connection) => {
  console.log(chalk.green('Un cliente se ha conectado'));

  const socket = new ClassEventEmitter(connection);

  socket.on('message', (message) => {
    let note_gestor = new NoteGestor();
    console.log(chalk.green('La solicitud del cliente ha sido recibida'));

    let response: ResponseType = {
      message: '',
    }

    switch (message.type) {
      case 'add':
        let note = new Note(message.title, message.body, message.color);
        response.message = note_gestor.addNote(message.user, note)
        break;
      case 'modify':
        let note2 = new Note(message.title, message.body, message.color);
        response.message = note_gestor.modifyNote(message.user, note2);
        break;
      case 'remove':
        response.message = note_gestor.removeNote(message.user, message.title);
        break;
      case 'read':
        response.message = note_gestor.readNote(message.user, message.title);
        break;
      case 'list':
        response.message = note_gestor.listNote(message.user);
        break;
    }

    connection.write(JSON.stringify(response), (err) => {
      if (err)
        console.log(chalk.red(`La respuesta no pudo ser enviada al cliente: ${err.message}`));
      else {
        console.log(chalk.green(`La respuesta se ha podido realizar`));
        connection.end();
      }
    });
  });

  connection.on('error', (err) => {
    if (err)
      console.log(chalk.red('La conexión no se ha podido realizar'));
  });

  connection.on('close', () => {
    console.log(chalk.green('Un cliente se ha desconectado'));
  });
});

server.listen(60300, () => {
  console.log(chalk.green('Esperando a que los clientes se conecten'))
});