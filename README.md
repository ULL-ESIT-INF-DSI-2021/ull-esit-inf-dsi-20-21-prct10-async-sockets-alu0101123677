# Informe de la Práctica 10 de la asignatura de Desarrollo de Sistemas Infórmaticos
## Datos
  * **Nombre:** Bruno Lorenzo
  * **Apellidos:** Arroyo Pedraza
  * **Gmail:** alu0101123677@ull.edu.es
  * **Univeridad:** Universidad de La Laguna
  * **Asignatura:** Desarrollo de Sistemas Informáticos
  * **Práctica:** Práctica 10 Cliente y servidor para una aplicación de procesamiento de notas de texto

[![Tests](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct10-async-sockets-alu0101123677/actions/workflows/tests.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct10-async-sockets-alu0101123677/actions/workflows/tests.yml) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2021_ull-esit-inf-dsi-20-21-prct10-async-sockets-alu0101123677&metric=alert_status)](https://sonarcloud.io/dashboard?id=ULL-ESIT-INF-DSI-2021_ull-esit-inf-dsi-20-21-prct10-async-sockets-alu0101123677) [![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct10-async-sockets-alu0101123677/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct10-async-sockets-alu0101123677?branch=main)

## Desarrollo

### 1. Introducción

Informe de la decima práctica de la asignatura de **Desarrollo de Sistemas Informáticos**. En la práctica propuesta se ha realizado un ejercicio en **typescript** en los cuales trabajaremos con el sistemas de ficheros de la práctica 8 para escribir un **servidor** y un **cliente** haciendo uso de los **sockets** proporcionados por el módulo net de **Node.js**.

**Importante:** Utilizar el comando `npm install` para instalar las dependencias de desarrollo que utiliza el proyecto cuando se descargue de GitHub.

### 2. Objetivos

El objetivo principal de la práctica es familiarizarse con el **módulo net** de Node.js y la clase **EventEmitter** del módulo **Events** de Node.js para esto realizaremos el ejercicio mencionado con anterioridad en el apartado de introducción y explicado en el apartado de desarrollo. 

### 3. Desarrollo

#### 3.1 Tareas previas

Para el desarrollo de la práctica cómo tal primero hay que hacer unas preparaciones previas, hay que aceptar la asignación de la práctica 10 y preparar el entorno del proyecto, para esto es necesario el archivo **package.json** y **tsconfig.json**, así cómo crear la estructura de directorios. Además de seguir las pautas para implementar la generación de documentación por **typedoc**, los test unitarios realizandos con **mocha** y **chai**, el cubrimiento de código mediante **instabul** y **coveralls** y por último la implementación de **GitHub Actions** que llevará a cabo los test unitarios, el cubrimiento del código y la utilización del **Sonar Cloud** para comprobar la calidad y seguridad del código fuente.

Por otro lado leer y familiarizarse familiarizarse con el **módulo net** de Node.js y la clase **EventEmitter** del módulo **Events** de Node.js para esto realizaremos el ejercicio mencionado con anterioridad en el apartado de introducción y explicado en el apartado de desarrollo. 

#### 3.2 Desarrollo

Para esta práctica tendremos Las operaciones que podrá solicitar el cliente al servidor deberán ser las mismas que ya implementamos durante la Práctica 8, esto es, añadir, modificar, eliminar, listar y leer notas de un usuario concreto. Un usuario interactuará con el cliente de la aplicación, exclusivamente, a través de la línea de comandos. Al mismo tiempo, en el servidor, las notas se almacenarán como ficheros JSON en el sistema de ficheros y siguiendo la misma estructura de directorios utilizada durante la Práctica 8.

Para la realización del ejercicio hemos realizado ciertas modificaciones a las clases **Note** y **NoteGestor**, así cómo ((eliminado el fichero ***note-app** y creando la clase **ClassEventEmitter**, los types que se encuentran en **types** y el **cliente** y el **servidor**.

##### 3.2.1 [Note](./src/Note.ts)

Se han modificado los métodos **printTitle** y **printBody**, en los cuales ahora comprueban de que color es el objeto nota y retorna un string con el **chalk** de su color correspondiente.

##### 3.2.2 [NoteGestor](./src/NoteGestor.ts)

Se han modificado los métodos de la clase **NoteGestor**, ahora los console.log() que se realizaban en cada método se guardan en una variable string llamada result y esta variable se retorna al final de la ejecución de cada método.

##### 3.2.3 [ClassEventEmitter](./src/ClassEventEmitter.ts)

Clase **ClassEventEmitter** que hereda de **EventEmitter**, es utilizada para ir recibiendo un mensaje a trozos e irlo juntando en un único mensaje, en el momento que reciba una señal **end** emitira el mensaje entero para que pueda ser utilizado.

##### 3.2.4 [types](./src/types.ts)

El fichero types define **RequestType** y **ResponseType**, las cuales son los tipos que vamos a utilizar para definir los mensajes que van a enviar el cliente y el servidor respectivamente.

**RequestType** representa una petición de solicitud del cliente, el parametro **type** representa los tipos de solicitud, el parametro **user** representa el usuario, el parametro opcional **title** representa el titulo de la nota, el parametro opcional **body** representa el cuerpo de la nota, el parametro opcional **color** representa el color de la nota.

**ResponseType** representa una respuesta del servidor. el parametro **type** representa los tipos de respuesta y el parametro **message** representa el contenido de la respuesta.

##### 3.2.5 [Client](./src/client.ts)

En el fichero **client** tenemos nuestro cliente, en el inicializamos un **socket** conectado inicialmente al puerto 60300 y se lo pasamos como parametro al objeto client, perteneciente a la clase **ClassEventEmitter**. 

Inicializamos una solicitud llamada request que será de tipo **RequestType** y a través de los yargs implementados le daremos forma a la solicitud gracias a los parametros que hemos introducido por teclado al iniciar el cliente. 

Utilizamos **socket.write()** para enviar nuestra solicitud al servidor, si no ha sido capaz de enviar la solicitud mostrará por consola un mensaje de error, al contrario, si se ha realizado con exito mostrará un mensaje de confirmación.

```typescript
socket.write(JSON.stringify(request), (err) => {
  if(err)
    console.log(chalk.red(`La solicitud no se ha podido realizar: ${err.message}`));
  else {
    console.log(chalk.green(`La solicitud se ha podido realizar`));
    socket.end();
  }
});
```
**client.on('message')** recoge el mensaje de respuesta que recibimos desde el servidor y que emitimos gracias a que el objeto client es un objeto de la clase ClassEventEmitter. Una vez que tenemos el mensaje mostramos por consola el apartado message de la respuesta recibida.

```typescript
client.on('message', (message) => {
  console.log(message.message);
});
```
En caso de que la conexión no se pudiera establecer tenemos el **client.on('error')** que nos comunica por consola este suceso.

```typescript
client.on('error', (err) => {
  console.log(chalk.red(`La conexión no se ha podido establecer: ${err.message}`));
});
```

Se puede inicializar el cliente de las siguientes maneras, teniendo en cuenta que los colores validos son Rojo, Verde, Azul y Amarillo.

```bash
$node dist/client.js add --user="usuario" --title="titulo" --body="cuerpo de la nota" --color="color de la nota"

$node dist/client.js modify --user="usuario" --title="titulo" --body="cuerpo de la nota" --color="color de la nota"

$node dist/client.js remove --user="usuario" --title="titulo" 

$node dist/client.js read --user="usuario" --title="titulo"

$node dist/client.js list --user="usuario"
```

##### 3.2.6 [Server](./src/server.ts)

En el fichero **server** tenemos nuestro servidor, para crear nuestro servidor utilizamos el  módulo net y es muy importante inicializarlo con la opción {allowHalfOpen: true}. Una vez creado nuestro servidor este estará pendiente del puerto 60300, puerto elegido en donde se conectarán nuestros clientes.

Cada vez que un cliente se conecte se ejecutará el callback del servidor, este callback tiene como parametro un objeto Socket con el cual podremos recibir y enviar datos a los clientes conectados. En el momento que un cliente se conecte se nos notificará por consola y acto seguido creamos el objeto socket, un objeto de la clase **ClassEventEmitter** que recibe como parametro el socket del servidor, connection.

En el momento en el que nuestro servidor reciba un mensaje del cliente, el callback de **socket.on('message')**, mostrará por pantalla que la solicitud ha sido recibida e inicilizará una respuesta de tipo **ResponseType**, este será el mensaje que enviaremos de vuelta al cliente con la respuesta, a continuación mediante un switch aplicamos el caso correspondiente al tipo de solicitud que ha enviado el cliente comprobando el message.type, en cada caso ejecutamos el método correspondiente de la clase NoteGestor y el return lo guardamos en el apartado message de nuestra respuesta.

Cuando se realize el switch ya tendremos en nuestra respuesta el resultado de la operación, el cuál mediante **connection.write()** será enviado a nuestro cliente.

En caso de que un cliente se desconecte o la conexión no se pueda realizar contamos con un **connection.on('error')** y un **connection.on('close')**


### 4. Conclusiones

En conclusión, la introducción de los **sockets** a nuestro programa nos introduce aún más en el día a día y en casos de la vida real al utilizar un cliente-servidor, esto aplicado también a lo que hemos realizado con anterioridad aporta mucha más profundidad a la de trabajar con typescript. 

### 5. Bibliografía

[Guión de la práctica 10](https://ull-esit-inf-dsi-2021.github.io/prct10-async-sockets/)

[Introducción a Node.js](https://ull-esit-inf-dsi-2021.github.io/nodejs-theory/nodejs-intro.html)

[Introducción al sistema de ficheros en Node.js](https://ull-esit-inf-dsi-2021.github.io/nodejs-theory/nodejs-filesystem.html)

[Yarg](https://www.npmjs.com/package/yargs)

[Chalk](https://www.npmjs.com/package/chalk)

[API síncrona](https://nodejs.org/dist/latest-v15.x/docs/api/fs.html#fs_synchronous_api) 

[Apuntes de sockets](https://ull-esit-inf-dsi-2021.github.io/nodejs-theory/nodejs-sockets.html)

[Modulo net](https://nodejs.org/dist/latest-v16.x/docs/api/net.html)

[Eventmitter](https://nodejs.org/dist/latest-v16.x/docs/api/events.html#events_class_eventemitter)


