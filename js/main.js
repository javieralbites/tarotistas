document.addEventListener('DOMContentLoaded', ()=> {
  var tl = gsap.timeline()
  tl.to('.loadingPano img', {opacity: 0, delay:3, })
  tl.to('.loadingPano', {y:'-100%',delay:.5, duration:0.5, ease: 'power4'})
  tl.from('.nav-container .logo',{opacity:0})
  tl.from('.nav-links a ', {opacity:0, stagger:.2})
})

// NAV 
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
      nav.classList.toggle("sticky", window.scrollY > 0);
});

// MENU 
function menuOnClick() {
  document.querySelector(".menu-btn").classList.toggle("change");
  document.querySelector(".menu").classList.toggle("change");
  var tl = gsap.timeline()
  // tl.from('.menu ul li', {
  //   opacity:1,
  //   delay:5
  // })
}

// gsap.from('.menu ul li', {
//   opacity: 0,
//   x:30
// })

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
// SLIDE NUESTROS TAROTISTAS
var swiperTarotistas = new Swiper(".swiper-nuestros-tarotistas", {
  navigation:{
    prevEl: '.nuestros-tarotistas-btn-prev',
    nextEl: '.nuestros-tarotistas-btn-next'
  },
  loop: true
})
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