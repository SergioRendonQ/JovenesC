<?php
require('connection.php');
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>registro estudiantes</title>
  <link rel="stylesheet" href="http://localhost/prueba/public/css/registro-estudiante.css" />
</head>
<header>
  <h1 class="titulo">REGISTRO - ESTUDIANTE</h1>
</header>

<body>
  <img class="logo" src="public/img/logo.PNG" />

  <div class="contenedor">
    <input type="text" placeholder="USUARIO" />
    <input type="email" placeholder="CORREO ELECTRONICO" />
    <input type="password" placeholder="CONTRASEÑA" id="contrasena" />
    <button id="mostrarContrasena">
      <img width="25vh" src="./public/img/ojo.png" alt="" />
    </button>
    <input type="number" placeholder="NUMERO DE TELEFONO" />
  </div>
  <a href="index.php"> <button class="button">CONTINUAR</button> </a>
  <a href="index.php"><img class="flecha" src="public/img/flecha.png" /></a>
  <script src="./public/java/registro.js"></script>
</body>

</html>