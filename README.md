
¡Hola!

!!!Importante!!!:

// Prácticamente no use clases para dar los estilos CSS, si no que use estilos en línea ya que es un proyecto pequeño.
// No es una página SPA(Single Page Application) por lo cual no use RouterLink ni Unsuscribe, pero si debo hacerlo, puedo hacerlo tranquilamente.
// Tampoco use Guard(para proteger las rutas) y PWA, más que nada por falta de tiempo, ya que actualmente trabajo.
// Luego ordene las carpetas de manera sencilla, porque es un proyecto sinple, si no, lo hubiese ordenado de esta forma 
        Auth:
             Componentes.
              Páginas.
               Pipes.
               Servicios.
               Modelos.
               Modulos.

Para iniciar el proyecto descarga el archivo zip o clónalo desde la consola de desarrollador.

Ingresa a Client(es importante que pongas la mayúscula inicial) y pon el comando "npm i", luego "ng serve".

Ingresa a Server(es importante que pongas la mayúscula inicial) y pon el comando "npm i", después "npm start".

El servidor se inicia en el puerto 4000 y el cliente en el 4200.

Como base de datos, use un servicio gratuito (Planetscale), por si por algún motivo no te llegan a aparecer las variables de entorno en
la base de datos, reemplaza:

\Server\src\dataBase

var pool  = mysql.createPool({
    connectionLimit : 50,
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password,
    ssl:{
      rejectUnauthorized: false
    }
  });

por:

var pool  = mysql.createPool({
    connectionLimit : 50,
    host: "us-east.connect.psdb.cloud",
    database: "appdb",
    user: "38w8c9cu5oow16qt8i7y",
    password: "pscale_pw_7Sk7HHBk8NAlLJEpumQqfd59avbLrhnhJGsLt30U0Vl",
    ssl:{
      rejectUnauthorized: false
    }
  });

