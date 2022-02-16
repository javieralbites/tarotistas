// LOGIN 
function registroActive() {
    document.querySelector(".content-registro").classList.add("active")
    document.querySelector(".content-iniciarSesion").classList.remove("active")
    document.querySelector(".btn-registro").classList.add("active")
    document.querySelector(".btn-inicioSesion").classList.remove("active")
  }
  
  function inicioSesionActive() {
    document.querySelector(".content-registro").classList.remove("active")
    document.querySelector(".content-iniciarSesion").classList.add("active")
    document.querySelector(".btn-registro").classList.remove("active")
    document.querySelector(".btn-inicioSesion").classList.add("active")
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
    // if (!userPasswordSignUp.value == "") {
    //   userPasswordSignUp.focus()
    // }
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