import * as chalk from 'chalk';
import * as net from 'net';
import {ClassEventEmitter} from './ClassEventEmitter';
import {ResponseType} from './types';
import {NoteGestor} from './NoteGestor'
import {Note} from './Note'

const server = net.createServer({allowHalfOpen: true}, (connection) => {
  console.log(chalk.green('Un cliente se ha conectado'));

  const socket = new ClassEventEmitter(connection);

  socket.on('message', (message) => {
    let note_gestor = new NoteGestor();
    console.log(chalk.green('La solicitud del cliente ha sido recibida'));

    let response: ResponseType = {
      type: 'add',
      message: '',
    }

    switch (message.type) {
      case 'add':
        let note = new Note(message.title, message.body, message.color);
        response.message = note_gestor.addNote(message.user, note)
        break;
      case 'modify':
        break;
      case 'remove':
        break;
      case 'read':
        break;
      case 'list':
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