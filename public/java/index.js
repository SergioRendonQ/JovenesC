const contrasenaInput = document.getElementById("contrasena");
const mostrarContrasenaBtn = document.getElementById("mostrarContrasena");

mostrarContrasenaBtn.addEventListener("click", () => {
  if (contrasenaInput.type === "password") {
    contrasenaInput.type = "text";
  } else {
    contrasenaInput.type = "password";
  }
});
// Obtén los elementos del DOM
const registerButton = document.getElementById("registerButton");
const registrationModal = document.getElementById("registrationModal");
const closeModal = document.getElementById("closeModal");
const confirmButton = document.getElementById("confirmButton");

// Mostrar el modal al hacer clic en el botón de registro
registerButton.addEventListener("click", () => {
  registrationModal.style.display = "block";
});

// Cerrar el modal al hacer clic en la "X"
closeModal.addEventListener("click", () => {
  registrationModal.style.display = "none";
});

// Acción al hacer clic en el botón "Confirmar"
confirmButton.addEventListener("click", () => {
  // Obtenemos el valor seleccionado (estudiante o docente)
  const selectedRole = document.querySelector(
    'input[name="role"]:checked'
  ).value;

  // Realiza aquí la lógica que desees con el rol seleccionado (por ejemplo, enviarlo al servidor).

  // Cierra el modal
  registrationModal.style.display = "none";
});
