//seleccion de los elementos del html
let form = document.getElementById("formulario");

let inputUsername = document.getElementById("username");

let inputPassword = document.getElementById("password");

// funcion que verificar que los campos "usuario" y "contraseña" no estén vacios, tambien 
// verifica que el usuario contenga '@'.
let validarForm = function (e) {
  if (inputUsername.value === "" || inputPassword.value === "") {
    e.preventDefault();
    alert("Debes completar los campos nombre y contraseña para continuar.");
  
} else if(!(inputUsername.value.includes("@"))) {
    e.preventDefault();
    alert("El campo usuario debe contener un '@'");
  
} else {
    e.preventDefault();
    alert("Los datos fueron ingresados correctamente.");
  }
};

form.addEventListener("submit", validarForm);
