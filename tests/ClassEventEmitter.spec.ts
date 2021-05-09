import 'mocha';
import {expect} from 'chai';
import {EventEmitter} from 'events';
import {ClassEventEmitter} from '../src/ClassEventEmitter';

describe('ClassEventEmitter', () => {
  it('Emitimos un mensaje una vez que se encuentre completo', (done) => {
    let socket = new EventEmitter();
    let emit = new ClassEventEmitter(socket);
    
    emit.on('message', (message) => {
      expect(message).to.be.eql({'title': 'Nota roja', 'body': 'Esto es una nota roja', 'color': 'Rojo'});
      done();
    });

    socket.emit('data', '{"title": "Nota roja",');
    socket.emit('data', '"body": "Esto es una nota roja",');
    socket.emit('data', '"color": "Rojo"}');
    socket.emit('end');
  });
});
