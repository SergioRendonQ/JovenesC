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
