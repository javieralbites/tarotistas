// FORM LOGIN / REGISTRO
const contentRegistro = document.querySelector(".content-registro")
const contentInicioSesion = document.querySelector(".content-iniciarSesion")
const btnRegistro = document.querySelector(".btn-registro")
const btnInicoSesion = document.querySelector(".btn-inicioSesion")

function registroActive() {
    contentRegistro.classList.add("active")
    contentInicioSesion.classList.remove("active")
    btnRegistro.classList.add("active")
    btnInicoSesion.classList.remove("active")
}

function inicioSesionActive() {
    contentRegistro.classList.remove("active")
    contentInicioSesion.classList.add("active")
    btnRegistro.classList.remove("active")
    btnInicoSesion.classList.add("active")
}

// HIDE PASSWORD 
function hidePassSignUp() {
    var userPasswordSignUp = document.getElementById("userPasswordSignUp");
    if (userPasswordSignUp.type == "password") {
        userPasswordSignUp.type = "text";
    } else {
        userPasswordSignUp.type = "password";
    }
    document.querySelector(".btn-password").classList.toggle("hidepassword");
}

function hidePassLogin() {
    var userPasswordLogin = document.getElementById("userPasswordLogin");
    if (userPasswordLogin.type == "password") {
        userPasswordLogin.type = "text";
    } else {
        userPasswordLogin.type = "password";
    }
    document.querySelector(".btn-password").classList.toggle("hidepassword");
}