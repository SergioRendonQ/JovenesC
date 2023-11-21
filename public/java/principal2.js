function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

// Cierra el menú desplegable si el usuario hace clic en cualquier parte de la página
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.style.display === "block") {
        openDropdown.style.display = "none";
      }
    }
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const cerrarSesionButton = document.getElementById("cerrarSesion");

  cerrarSesionButton.addEventListener("click", function () {
    const confirmacion = confirm("¿Estás seguro de cerrar sesión?");
    if (confirmacion) {
      // Aquí puedes agregar la lógica para cerrar la sesión, por ejemplo, redireccionar a la página de inicio de sesión.
      // Reemplaza la siguiente línea con la acción real que deseas realizar.
      window.location.href = "principal.php";
    }
  });
});

// Obtenemos los elementos necesarios
const imagenes = [
  document.getElementById("imagen1"),
  document.getElementById("imagen2"),
  document.getElementById("imagen3"),
];

// Añadimos un evento de clic a cada imagen
imagenes.forEach((imagen, index) => {
  imagen.addEventListener("click", function () {
    // Ocultamos la imagen actual
    imagenes[index].classList.remove("visible");
    imagenes[index].classList.add("hidden");

    // Calculamos el índice de la próxima imagen
    const siguienteIndice = (index + 1) % imagenes.length;

    // Mostramos la próxima imagen
    imagenes[siguienteIndice].classList.remove("hidden");
    imagenes[siguienteIndice].classList.add("visible");
  });
});
