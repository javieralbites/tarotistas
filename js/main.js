// NAV 
// window.addEventListener("scroll", () => {
//   const nav = document.querySelector("nav");
//       nav.classList.toggle("sticky", window.scrollY > 0);
// });

// MENU 
function menuOnClick() {
  document.querySelector(".menu-btn").classList.toggle("change");
  document.querySelector(".menu").classList.toggle("change");
}


// SOBRE TAROTISTAS FAQ ACCORDEON 
const acc_btns = document.querySelectorAll(".faq-header");
const acc_contents = document.querySelectorAll(".faq-content");

acc_btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    acc_contents.forEach((acc) => {
      if (
        e.target.nextElementSibling !== acc &&
        acc.classList.contains("active")
      ) {
        acc.classList.remove("active");
        acc_btns.forEach((btn) => btn.classList.remove("active"));
      }
    });

    const panel = btn.nextElementSibling;
    panel.classList.toggle("active");
    btn.classList.toggle("active");
  });
});

// SLIDES HOME 
var swiper = new Swiper(".swiper-testimonio", {
  slidesPerView: "auto",
  spaceBetween: 250,
  centeredSlides: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  loop: true,
  navigation: {
    prevEl: '.btn-prev',
    nextEl: '.swiper-testimonio-btn-next'
}
});

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