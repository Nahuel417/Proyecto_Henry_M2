# Proyecto Henry M2

## Descripción
Este proyecto consiste en desarrollar una interfaz de usuario en el front-end que consuma y muestre información en tiempo real desde una base de datos. A través de solicitudes a un servidor, la interfaz se actualiza dinámicamente, proporcionando una experiencia interactiva y actualizada para el usuario.

## Objetivos del Proyecto
- **Desarrollar una Interfaz de Usuario Interactiva**: Crear una interfaz intuitiva y fácil de usar, en la que la creatividad sea clave para ofrecer una experiencia atractiva y eficiente. El objetivo es permitir que los usuarios interactúen de manera fluida con el sistema, utilizando un diseño innovador y funcionalidades prácticas que optimicen su experiencia.
- **Integrar el Front-End con un Servidor Back-End**: Configurar un servidor que se comunique con la base de datos para recibir, procesar y enviar datos en tiempo real a la interfaz de usuario a través de solicitudes HTTP.
- **Facilitar la Escalabilidad y Mantenibilidad**: Diseñar la arquitectura del proyecto de manera que pueda escalar fácilmente y ser mantenida a largo plazo, utilizando buenas prácticas de desarrollo y patrones de diseño.
- **Proveer una Experiencia de Usuario Fluida**: Asegurarse de que la interfaz se adapte de manera efectiva a diferentes dispositivos y tamaños de pantalla, proporcionando una experiencia de usuario fluida y consistente.

## Tecnologías Utilizadas

### Lenguajes de Programación
- **JavaScript (JS)**: Utilizado en las configuraciones tanto del back-end como en el front-end para la interacción dinámica.  

### Back-End
El back-end del proyecto está desarrollado con las siguientes tecnologías:

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.  
- **Express**: Framework para crear aplicaciones web y APIs.  
- **dotenv**: Gestión de variables de entorno.  
- **Nodemon**: Herramienta para reiniciar automáticamente el servidor durante el desarrollo.
- **Mongoose**: Librería para interactuar con bases de datos MongoDB, proporcionando una solución de modelado de objetos para datos almacenados.

### Front-End
El front-end está construido utilizando:

- **Axios**: Biblioteca para realizar solicitudes HTTP desde el navegador, utilizada para la comunicación con el back-end.
- **Live-server**: Servidor de desarrollo ligero para servir archivos estáticos y actualizar automáticamente la vista en el navegador.
- **Webpack**: Empacador de módulos que permite la optimización y manejo de recursos como JavaScript, CSS y otros archivos.
- **Nodemon**: Herramienta para reiniciar automáticamente el servidor durante el desarrollo, asegurando que los cambios se reflejen sin necesidad de reiniciar manualmente.

### Herramientas de Desarrollo
- **Morgan**: Logger de solicitudes HTTP en el servidor.  
- **Cors**: Para habilitar el intercambio de recursos entre dominios.  

## Instalación

```bash
$ npm install
```

## Ejecución de la aplicación

```bash
# back
$ npm start
'Para levantar el back con la carga de datos, se debe hacer manualmente desde la interfaz de MongoDB Compass utilizando el database.json que se encuentra en la carpeta del proyecto.'

# front
$ npm start
```

## Environment Variables
Make sure to create a `.env` file in the project root with the following values:

```bash
# Base de datos MongoDB
MONGO_URI=                  # URI de conexión a la base de datos MongoDB (ej. mongodb+srv://usuario:contraseña@cluster.mongodb.net/nombre_base_de_datos)
appName=                    # Nombre de la base de datos
```

## Video del Proyecto
[![Video del Proyecto](https://youtu.be/DJmTKRibRag)

## Deploy (proximamente)
