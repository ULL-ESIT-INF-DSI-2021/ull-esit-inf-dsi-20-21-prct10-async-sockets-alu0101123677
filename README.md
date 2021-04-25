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

### 4. Conclusiones

### 5. Bibliografía

[Guión de la práctica 8](https://ull-esit-inf-dsi-2021.github.io/prct08-filesystem-notes-app/)

[Introducción a Node.js](https://ull-esit-inf-dsi-2021.github.io/nodejs-theory/nodejs-intro.html)

[Introducción al sistema de ficheros en Node.js](https://ull-esit-inf-dsi-2021.github.io/nodejs-theory/nodejs-filesystem.html)

[Yarg](https://www.npmjs.com/package/yargs)

[Chalk](https://www.npmjs.com/package/chalk)

[API síncrona](https://nodejs.org/dist/latest-v15.x/docs/api/fs.html#fs_synchronous_api) 


