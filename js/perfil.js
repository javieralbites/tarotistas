const tabs = document.querySelector(".perfil-container");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

tabs.onclick = e => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach(btn => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    contents.forEach(content => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
}

const perfilDatosUsuario = document.querySelector(".perfil-datos-usuario")
const btnPerfilUsuario = document.querySelector(".perfil-datos-usuario-btn")
btnPerfilUsuario.addEventListener("click", () => {
  if (perfilDatosUsuario.classList.contains("disabled") ) {
    perfilDatosUsuario.classList.remove("disabled")
    btnPerfilUsuario.innerHTML="Guardar"
  } else {
    perfilDatosUsuario.classList.add("disabled")
    btnPerfilUsuario.innerHTML="Editar"
  }
})

const perfilDatosEmail = document.querySelector(".perfil-datos-email")
const btnPerfilEmail = document.querySelector(".perfil-datos-email-btn")
btnPerfilEmail.addEventListener("click", () => {
  if (perfilDatosEmail.classList.contains("disabled") ) {
    perfilDatosEmail.classList.remove("disabled")
    btnPerfilEmail.innerHTML="Guardar"
  } else {
    perfilDatosEmail.classList.add("disabled")
    btnPerfilEmail.innerHTML="Editar"
  }
})


function saveUserPhone() {
  const perfilDatosPhone = document.querySelector(".perfil-datos-phone")
const btnPerfilPhone = document.querySelector(".perfil-datos-phone-btn")
// btnPerfilEmail.addEventListener("click", () => {
  if (perfilDatosPhone.classList.contains("disabled") ) {
    perfilDatosPhone.classList.remove("disabled")
    btnPerfilPhone.innerHTML="Guardar"
  } else {
    perfilDatosPhone.classList.add("disabled")
    btnPerfilPhone.innerHTML="Editar"
  }
// })

}