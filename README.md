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

**Importante:**  Utilizar el comando `npm install` para instalar las dependencias de desarrollo que utiliza el proyecto cuando se descargue de GitHub.

### 2. Objetivos

El objetivo principal de la práctica es el aprendizaje y utilización de los paquetes **yargs** y **chalk**, así como familiarisarse con el API síncrona que proporciona Node.js. Para cumplir este objetivo se llevará a cabo el ejercicio comentado en el apartado de introducción de este informe.

### 3. Desarrollo

#### 3.1 Tareas previas

Para el desarrollo de la práctica cómo tal primero hay que hacer unas preparaciones previas, hay que aceptar la asignación de la práctica 8 y preparar el entorno del proyecto, para esto es necesario package.json y tsconfig.json, así cómo crear la estructura de directorios. Además de seguir las pautas para implementar la generación de documentación por **typedoc**, los test unitarios realizandos con **mocha** y **chai**, el cubrimiento de código mediante **instabul** y **coveralls** y por último la implementación de **GitHub Actions** que llevará a cabo los test unitarios, el cubrimiento del código y la utilización del **Sonar Cloud** para comprobar la calidad y seguridad del código fuente.

Por otro lado la lectura y aprendizaje de los paquetes **Yargs** y **Chalk** así cómo de la **API síncrona**.

#### 3.2 Desarrollo

En este ejercicio creamos la clase **Note** y **NoteGestor** y el main de nuestro programa **note-app** implementado con **yargs** para utilizar la línea de comandos.

##### 3.2.1 note-app

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

##### 3.2.2 Note

Clase **Note** que realiza la representación de un objeto nota, cuenta con tres atributos title, body y color que representan respectivamente el titulo, el cuerpo y el color que tendría una nota. Cuenta con 8 atributos, 3 son getters para los atributos de la clase y 3 son setters para los atributos también.

##### 3.2.3 NoteGestore

Clase **NoteGestore** que realiza las funcionalidades

### 4. Conclusiones

### 5. Bibliografía

[Guión de la práctica 8](https://ull-esit-inf-dsi-2021.github.io/prct08-filesystem-notes-app/)

[Introducción a Node.js](https://ull-esit-inf-dsi-2021.github.io/nodejs-theory/nodejs-intro.html)

[Introducción al sistema de ficheros en Node.js](https://ull-esit-inf-dsi-2021.github.io/nodejs-theory/nodejs-filesystem.html)

[Yarg](https://www.npmjs.com/package/yargs)

[Chalk](https://www.npmjs.com/package/chalk)

[API síncrona](https://nodejs.org/dist/latest-v15.x/docs/api/fs.html#fs_synchronous_api) 


