# Repositorio de la Práctica 8 de la asignatura de Desarrollo de Sistemas Infórmaticas
## Datos
  * **Nombre:** Bruno Lorenzo
  * **Apellidos:** Arroyo Pedraza
  * **Gmail:** alu0101123677@ull.edu.es
  * **Univeridad:** Universidad de La Laguna
  * **Asignatura:** Desarrollo de Sistemas Informáticos
  * **Práctica:** Práctica 8 Aplicación de procesamiento de notas de texto

[![Tests](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-alu0101123677/actions/workflows/tests.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-alu0101123677/actions/workflows/tests.yml)

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-alu0101123677/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-alu0101123677?branch=main)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2021_ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-alu0101123677&metric=alert_status)](https://sonarcloud.io/dashboard?id=ULL-ESIT-INF-DSI-2021_ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-alu0101123677)

## Desarrollo

### 1. Introducción

Informe de la octava práctica de la asignatura de **Desarrollo de Sistemas Informáticos**. En la práctica propuesta se ha realizado un ejercicio en typescript en el cuál tendremos que implementar una aplicación de procesamiento de notas de texto. Permitirá **añadir**, **modificar**, **eliminar**, **listar** y **leer** notas de un usuario en concreto. Las notas se almacenarán como ficheros **JSON** en el sistema de ficheros de la máquina que ejecute la aplicación.

Una nota estará formada, como mínimo, por un **título**, un **cuerpo** y un **color** (rojo, verde, azul o amarillo).

**Importante:**  Utilizar el comando `npm install` para instalar las dependencias de desarrollo que utiliza el proyecto cuando se descargue de GitHub. Asimismo los test unitarios si se ejecutan con `npm run test` o `npm run coverage` se ejecutan y pasan completamente pero hay ocasiones que con la integración de github action cuando se ejecutan al realizar el push es posible que alguna de las versiones de node de fallo mientras que otra versión las ejecute correctamente. 

### 2. Objetivos

El objetivo principal de la práctica es el aprendizaje y utilización de los paquetes **yargs** y **chalk**, así como familiarisarse con el API síncrona que proporciona Node.js. Para cumplir este objetivo se llevará a cabo el ejercicio comentado en el apartado de introducción de este informe.

### 3. Desarrollo

#### 3.1 Tareas previas

Para el desarrollo de la práctica cómo tal primero hay que hacer unas preparaciones previas, hay que aceptar la asignación de la práctica 8 y preparar el entorno del proyecto, para esto es necesario package.json y tsconfig.json, así cómo crear la estructura de directorios. Además de seguir las pautas para implementar la generación de documentación por **typedoc**, los test unitarios realizandos con **mocha** y **chai**, el cubrimiento de código mediante **instabul** y **coveralls** y por último la implementación de **GitHub Actions** que llevará a cabo los test unitarios, el cubrimiento del código y la utilización del **Sonar Cloud** para comprobar la calidad y seguridad del código fuente.

Por otro lado la lectura y aprendizaje de los paquetes **Yargs** y **Chalk** así cómo de la **API síncrona**.

#### 3.2 Desarrollo

En este ejercicio creamos la clase **Note** y **NoteGestor** y el main de nuestro programa **note-app** implementado con **yargs** para utilizar la línea de comandos.

##### 3.2.1 [note-app](./src/note-app.ts)

Main del programa implementado con el paquete **yargs** para utilizar diversos comandos por terminal, los comandos utilizados son **add**, **modify**, **list**, **read** y **remove**.

Comando **add**, se construye pasando por línea de cómando el usuario, el titulo de la nota, el cuerpo de la nota y el color de la nota. En el handler creamos un objeto de la clase Note y otro de la clase NoteGestor para así llamar al método addNote y añadir una nota en formato json al directorio del usuario.

Comando **modify**, se construye pasando por línea de cómando el usuario, el título de la nota, el cuerpo de la nota y el color de la nota. En el handler creamos un objeto de la clase Note y otro de la clase NoteGestor para así llamar al método modifyNote de la clase NoteGestor y modificar una nota ya creada.

Comando **list**, se construye pasando por línea de cómando el usuario. En el handler creamos un objeto de la clase NoteGestor para llamar así al método listNote y mostrar todas las notas que tiene un usuario.

Comando **read**, se construye pasando por línea de cómando el usuario y el titulo de una nota. En el handler creamos un objeto de la clase NoteGestor para así llamar al método readNote y mostrar el contenido que tiene una nota.

Comando **remove**, se construye pasando por línea de cómando el usuario y el titulo de una nota. En el handler creamos un objeto de la clase NoteGestor para así llamar al método removeNote y eliminar la nota de un usuario.

Para introducir los colores deben ser: Rojo, Verde, Azul o Amarillo. Para ejecutar el programa se tienen las siguientes opciones:

  * node dist/note-app.js add --user="nombre del usuario" --title="titulo de la nota" --body="cuerpo de la nota" --color="Color"

  * node dist/note-app.js modify --user="nombre del usuario" --title="titulo de la nota" --body="cuerpo de la nota" --color="Color"

  * node dist/note-app.js list --user="nombre del usuario"

  * node dist/note-app.js read --user="nombre del usurio" --title="titulo de la nota"

  * node dist/note-app.js remove --user="nombre del usuario" --title="titulo de la nota"

##### [3.2.2 Note](./src/Note.ts)

Clase **Note** que realiza la representación de un objeto nota, cuenta con tres atributos title, body y color que representan respectivamente el titulo, el cuerpo y el color que tendría una nota. Cuenta con 8 atributos, 3 son getters para los atributos de la clase y 3 son setters para los atributos también, además de un método printTitle y printBody, estos dos últimos métodos revisan de que color es el objeto nota e imprimen con el **chalk** su color correspondiente el titulo y el cuerpo respectivamente mediante un switch.

##### [3.2.3 NoteGestore](./src/NoteGestor.ts)

Clase **NoteGestore** que realiza las funcionalidades añadir una nota, eliminar una nota, modificar una nota, leer una nota y listar las notas que tiene un usuario. Para realizar estas funcionalidades se cuenta con los métodos addNote, modifyNote, listNote, readNote y removeNote.

AddNote recibe como parametros un string que representa el usuario y un objeto de la clase Note para así crear un fichero **JSON** que guarde la nota del usuario. Usando la función **existSync** de **node.js** comprobamos si el directorio del usuario existe, si no existe creamos el directorio y el archivo, si existiera revisamos si existe el archivo, en el caso de existir mostramos un mensaje de error y si no existe lo creamos. Para crear el archivo con el contenido de la nota utilizamos la funcion **writeFileSync** de **node.js**, es importante que el data que se le pase se consiga en un formato adecuado, esto lo realizamos gracias al **JSON.stringify**.

modifyNote recibe como parametros un string que representa el usuario y un objeto de la clase para así modificar un archivo **JSON** de un usuario. Usando la función **existSync** de **node.js** comprobamos si el directorio del usuario existe, si no existe mostramos un mensaje de error, si existiera revisamos si existe el archivo, en el caso de no existir mostramos un mensaje de error y si existe lo eliminamos y creamos un nuevo archivo a partir del objeto note recibido por parametro.

listNode recibe un parametro string que representa el usuario. Usando la función **existSync** de **node.js** comprobamos si el directorio del usuario existe, si no existe mostramos un mensaje de error, si existiera mostramos un listado de las notas que tiene el usuario. Para mostrar las notas utilizamos la función **readFileSync** de **node.js** para tener un vector con los nombres de todos los archivos JSON que hay en el directorio del usuario, realizamos un forEach para cada elemento del vector y así utilizar la función **readFileSync** para conseguir los datos de cada archivo y crear un objeto de la clase Note con los datos extraidos del fichero para utilizar el método **printTitle**.

readNote recibe dos parametros tipo string, para así conseguir el usuario y el titulo. Usando la función **existSync** de **node.js** comprobamos si el directorio del usuario existe, si no existe mostramos un mensaje de error, si existiera comprobamos si exite el archivo, si no existe mostramos un mensaje de error y en caso de existir utilizamos la estrategia del método listNode pero para solo un archivo y usando los métodos **printTitle** y **printBody**.

removeNote recibe dos parametros tipo string para así conseguir el usuario y el titulo. Usando la función **existSync** de **node.js** comprobamos si el directorio del usuario existe, si no existe mostramos un mensaje de error, si existiera comprobamos si exite el archivo, si no existe mostramos un mensaje de error y en caso de existir utilizamos la función **rmSync** de **node.js**

### 4. Conclusiones

En conclusión la utilización del paquete **yarg** nos permite aprovechar la línea de comando y el paquete **chalk** aprovechar configuraciones distintas para mostrar de forma más cómoda información de distinta indole, esto en combinación con **node.js** nos permite crear programas mucho más dinámicos y que modelen aplicaciones que se usarían en el día a día.

Así mismo la implementación de **Sonar Cloud** nos permite comprobar la calidad de nuestro código de manera mucho más cómoda.

### 5. Bibliografía

[Guión de la práctica 8](https://ull-esit-inf-dsi-2021.github.io/prct08-filesystem-notes-app/)

[Introducción a Node.js](https://ull-esit-inf-dsi-2021.github.io/nodejs-theory/nodejs-intro.html)

[Introducción al sistema de ficheros en Node.js](https://ull-esit-inf-dsi-2021.github.io/nodejs-theory/nodejs-filesystem.html)

[Yarg](https://www.npmjs.com/package/yargs)

[Chalk](https://www.npmjs.com/package/chalk)

[API síncrona](https://nodejs.org/dist/latest-v15.x/docs/api/fs.html#fs_synchronous_api) 


