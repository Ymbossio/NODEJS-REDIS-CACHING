# NODEJS-REDIS-CACHING

Este proyecto implementa un servidor Node.js que optimiza el almacenamiento en caché de información al acceder a un endpoint, con el objetivo de mejorar la experiencia del usuario y aumentar el rendimiento de la aplicación. Utiliza **Redis** como sistema de caché, **Docker** para contenerizar la aplicación y **response-time** para medir el tiempo de respuesta de las solicitudes.

## Objetivo

El objetivo de este proyecto es reducir la latencia de las respuestas a las solicitudes HTTP, mejorando el tiempo de respuesta al almacenar en caché las respuestas en Redis. Cuando una solicitud es realizada por primera vez, la respuesta se calcula y se almacena en Redis. Las solicitudes posteriores para el mismo recurso son servidas desde el caché, lo que mejora significativamente el tiempo de respuesta.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Redis**: Sistema de almacenamiento en caché en memoria.
- **Docker**: Contenerización de la aplicación para facilitar su despliegue y manejo.
- **response-time**: Middleware para medir y registrar el tiempo de respuesta de cada solicitud.
- **Express**: Framework para crear el servidor HTTP.
- **dotenv**: Para cargar variables de entorno.

## Requisitos

Asegúrate de tener instalados los siguientes programas en tu máquina local:

- [Node.js](https://nodejs.org/) (versión 14 o superior).
- [Docker](https://www.docker.com/get-started).


## Autor
Yovanis Bossio