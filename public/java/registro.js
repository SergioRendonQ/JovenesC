const contrasenaInput = document.getElementById("contrasena");
const mostrarContrasenaBtn = document.getElementById("mostrarContrasena");

mostrarContrasenaBtn.addEventListener("click", () => {
  if (contrasenaInput.type === "password") {
    contrasenaInput.type = "text";
  } else {
    contrasenaInput.type = "password";
  }
});
