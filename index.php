<?php
    require('connection.php');
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Iniciar sesión</title>
    <link rel="stylesheet" href="http://localhost/jass/public/css/style.css" />
  </head>

  <body>
    <a href="principal.html"
      ><img class="flecha" src="public/img/flecha.png"
    /></a>
    <div class="content">
      <h1 class="title">Concientizando con entretenimiento</h1>
      <h2 class="title2">Iniciar sesión</h2>
      <div class="circle">
        <img src="./public/img/logo.PNG" alt="Imagen en forma de círculo" />
      </div>
      <div class="form">
        <form class="section-form" action="#">
          <label class="section-label" for="usuario">Usuario</label>
          <input class="section-input" name="usuario" type="text" />
          <label class="section-label" for="contraseña">Contraseña</label>
          <input class="section-input" type="password" id="contrasena" />
          <button id="mostrarContrasena">
            <img width="25vh" src="./public/img/ojo.png" alt="" />
          </button>
        </form>
      </div>

      <div class="button-container">
        <a href="principal2.html">
          <button class="button">Continuar</button>
        </a>
        <button class="button" id="registerButton">Registrarse</button>
      </div>
      <div id="registrationModal" class="modal">
        <div class="modal-content">
          <span class="close" id="closeModal">&times;</span>
          <h2>Seleccione su rol:</h2>
          <div class="button-container2">
            <a href="registro-docentes.php"
              ><button class="button">Docente</button></a
            >
            <a href="registro-estudiantes.php"
              ><button class="button">Estudiante</button></a
            >
          </div>
        </div>
      </div>
    </div>
    <a href="centro-ayuda.html"
      ><img src="./public/img/logoayuda.webp" width="80" alt=""
    /></a>
    <script src="http://localhost/jass/public/java/index.js"></script>
  </body>
</html>
