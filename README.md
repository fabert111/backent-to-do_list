# PROYECTO CRUD REST API con Node.js, Express y MySQL

"Desarrollo de  un proyecto de REST API utilizando Node.js junto con el sólido framework web Express y el potente sistema de gestión de bases de datos MySQL. En este proyecto, implementarás los métodos HTTP GET, POST, PUT y DELETE,  para probar tu API de manera eficiente utilizando un cliente REST como Insomnia. 


## FUNCIONALIDADES 

A continuación, se detallan las funcionalidades proporcionadas por el backend de la aplicación:

1. **Listar Todas las Tareas (GET /api/jobs)**:
   - Puedes obtener una lista de todas las tareas pendientes almacenadas en la base de datos.
Esta lista incluirá información como el ID de la tarea, la descripción de la tarea (task), y el número de trabajadores asignados (Number_of_workers).
```    
        -GET    http://127.0.0.1:4000/api/jobs
[
	{
		"id": 1,
		"task": "Podar el Cesped",
		"Number_of_workers": 2
	},
	{
		"id": 2,
		"task": "Recoger Desperdicios",
		"Number_of_workers": 3
	},
	{
		"id": 3,
		"task": "Servicio de envios",
		"Number_of_workers": 2
	},
	{
		"id": 4,
		"task": "Sala de Enfermeria",
		"Number_of_workers": 4
	},
	{
		"id": 5,
		"task": "Servicios de Reparacion URG",
		"Number_of_workers": 6
	}
]
```

2. **Obtener una Tarea Específica (GET /api/jobs/:id)**:
   - Puedes obtener detalles de una tarea específica utilizando su ID.
La respuesta incluirá información como el ID de la tarea, la descripción de la tarea (task) y el número de trabajadores asignados (Number_of_workers).
```
        -GET    http://127.0.0.1:4000/api/jobs/2
            [
	{
		"id": 2,
		"task": "Recoger Desperdicios",
		"Number_of_workers": 3
	}
]

```
3. **Agregar una Nueva Tarea (POST /api/jobs)**:
   - Puedes agregar una nueva tarea proporcionando una descripción de la tarea (task) y el número de trabajadores asignados (Number_of_workers).
El backend validará si se proporcionaron ambos campos y responderá con un mensaje de éxito una vez que la tarea se haya agregado a la base de datos.
```
        -POST    http://127.0.0.1:4000/api/jobs
                {
	"message": "Task added"
}
                	{
		"id": 8,
		"task": "Niñeras",
		"Number_of_workers": 9
	}
```

4. **Actualizar una Tarea Existente (PUT /api/jobs/:id)**:
   - Puedes actualizar los detalles de una tarea existente utilizando su ID.
Puedes modificar la descripción de la tarea (task) y el número de trabajadores asignados (Number_of_workers).
Antes de la actualización, se realizarán comprobaciones para asegurarse de que se proporcionen todos los campos requeridos.
```
        -PUT    http://127.0.0.1:4000/api/jobs/8
                
                {
	-"fieldCount": 0,
	"affectedRows": 1,
	"insertId": 0,
	"serverStatus": 2,
	"warningCount": 0,
	"message": "(Rows matched: 1  Changed: 0  Warnings: 0",
	"protocol41": true,
	"changedRows": 0
}
                	{
		"id": 8,
		"task": "Niñeras",
		"Number_of_workers": 2
	}

```
5. **Eliminar una Tarea (DELETE /api/jobs/:id)**:
   Puedes eliminar una tarea específica proporcionando su ID.
La tarea correspondiente se eliminará de la base de datos.
```

        -DELETE http://127.0.0.1:4000/api/jobs/1
            {
	"fieldCount": 0,
	"affectedRows": 1,
	"insertId": 0,
	"serverStatus": 2,
	"warningCount": 0,
	"message": "",
	"protocol41": true,
	"changedRows": 0
}
```
6. **Conexión a la Base de Datos (database.js)**:
   El backend establece una conexión a la base de datos MySQL utilizando la biblioteca "promise-mysql".
Esta conexión se utiliza en todos los controladores para realizar operaciones de base de datos como consultar, agregar, actualizar y eliminar tareas.

   -Recuerda que como entorno de desarrollo local se ha utilizado XAMPP dando facilida y mejor manejo en
   Apache + MariaDB + PHP + Perl

## Ejecución del Servidor

Para ejecutar el servidor y poner en funcionamiento la API, sigue estos pasos:

1. Asegúrate de que tienes Node.js y npm instalados en tu sistema. Si no los tienes, puedes descargarlos e instalarlos desde [Node.js](https://nodejs.org/).

2. Clona este repositorio en tu máquina local o descárgalo como un archivo ZIP.

3. Abre una terminal y navega hasta el directorio raíz del proyecto.

4. Instala las dependencias del proyecto

5. Configura tus variables de entorno dentro del archivo `.env` en la raíz del proyecto. Estas variables deben incluir detalles de conexión a tu base de datos MySQL, como HOST, DATABASE, USER y PASSWORD.

6. Inicia el servidor de desarrollo con el siguiente comando:
    ```npm run dev```

7. El servidor se ejecutará en ``` `http://localhost:4000/` ```. Puedes acceder a la API y realizar solicitudes HTTP utilizando herramientas como Insomnia, Postman o curl.

8. ¡Listo! Ahora puedes comenzar a utilizar y probar tu API REST.

Recuerda que este comando utiliza nodemon para reiniciar automáticamente el servidor cuando se realizan cambios en el código, lo que facilita el desarrollo y la depuración de la aplicación.


## Recuerda tambien crear y asignar tus variables de entorno dentro del archivo .env (en la raíz del proyecto)
```
HOST=host
DATABASE=database
USER=user
PASSWORD=password
```
## Para instalar los paquetes de Node.js necesarios (indicados en package.json):

   npm i


## Instalación de XAMPP

Para el desarrollo de la aplicación, necesitarás [XAMPP](https://www.apachefriends.org/index.html) para proporcionar un servidor web y una base de datos. Sigue estos pasos para instalar XAMPP:

1. Ve al sitio web oficial de XAMPP en https://www.apachefriends.org/index.html.
2. Descarga la versión de XAMPP adecuada para tu sistema operativo (Windows, macOS o Linux).
3. Ejecuta el instalador descargado y sigue las instrucciones del asistente de instalación. Durante la instalación, se te preguntará qué componentes deseas instalar; asegúrate de incluir Apache y MySQL.
4. Una vez que XAMPP esté instalado, inicia el Panel de Control de XAMPP y asegúrate de que Apache y MySQL estén activados.
5. Abre tu navegador web y visita http://localhost/ para verificar que Apache esté funcionando correctamente. También puedes visitar http://localhost/phpmyadmin/ para acceder a la interfaz de administración de MySQL.

Con Node.js y XAMPP instalados, estás listo para comenzar a desarrollar el backend de la aplicación de la biblioteca.

## Cliente REST
Ten en cuenta que con respecto al cliente REST se utilizo ```"Insomnia" ```pero puedes usar muchos mas entre los que se ha usado en clase como ``` #Postman ``` entre otros ```#Paw ``````#Restlet ``````Client HTTPie``` ```#Thunder Client (para Visual Studio Code)```


## tecnologias utilizadas
```
dotenv
express
promise-mysql
```
## Dependencias de desarrollo:
```
@babel/cli
@babel/core
@babel/node
@babel/preset-env
morgan 
nodemon
```
# Autor 
faber tinoco ## backent-to-do_list
