# Informe de la Práctica 10 de la asignatura de Desarrollo de Sistemas Infórmaticos
## Datos
  * **Nombre:** Bruno Lorenzo
  * **Apellidos:** Arroyo Pedraza
  * **Gmail:** alu0101123677@ull.edu.es
  * **Univeridad:** Universidad de La Laguna
  * **Asignatura:** Desarrollo de Sistemas Informáticos
  * **Práctica:** Práctica 10 Cliente y servidor para una aplicación de procesamiento de notas de texto

[![Tests](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct10-async-sockets-alu0101123677/actions/workflows/tests.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct10-async-sockets-alu0101123677/actions/workflows/tests.yml) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2021_ull-esit-inf-dsi-20-21-prct10-async-sockets-alu0101123677&metric=alert_status)](https://sonarcloud.io/dashboard?id=ULL-ESIT-INF-DSI-2021_ull-esit-inf-dsi-20-21-prct10-async-sockets-alu0101123677) 

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




### 4. Conclusiones



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


