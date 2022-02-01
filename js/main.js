document.addEventListener('DOMContentLoaded', ()=> {
  var tl = gsap.timeline()
  tl.to('.loadingPano img', {opacity: 0, delay:1, })
  tl.to('.loadingPano', {y:'-100%',delay:.5, duration:0.5, ease: 'power4'})
  tl.from('.nav-container .logo',{opacity:0,duration:1})
  tl.from('.nav-links a ', {opacity:0,duration:1, stagger:.2})
})

// NAV 
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
    if (!document.querySelector(".menu").classList.contains("change")) {
      nav.classList.toggle("sticky", window.scrollY > 0);
    }
});

// MENU 
function menuOnClick() {
  document.querySelector(".menu-btn").classList.toggle("change");
  document.querySelector(".menu").classList.toggle("change");
  if (window.scrollY > 0) {
    document.querySelector("nav").classList.toggle("sticky")
  }
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

// SLIDES HOME TESTIMONIO
var swiperHome = new Swiper(".swiper-testimonio", {
  slidesPerView: "auto",
  spaceBetween: 30,
  centeredSlides: false,
  loop: true,
  navigation: {
    prevEl: '.swiper-testimonio-btn-prev',
    nextEl: '.swiper-testimonio-btn-next'
},
breakpoints: {
  992:{
    spaceBetween:250
  }
}
});
// SLIDES HOME SERVICIOS MOBILE
var swiperHomeServicioMobile = new Swiper(".home-servicios-slides-mobile", {
  slidesPerView: "auto",
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
// SLIDES HOME TAROTISTAS MOBILE
var swiperHomeServicioMobile = new Swiper(".home-tarotistas-slides-mobile", {
  slidesPerView: 1,
  spaceBetween: 30,
  // centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
// SLIDE NUESTROS TAROTISTAS
var swiperTarotistas = new Swiper(".swiper-nuestros-tarotistas", {
  // effect: "fade",
  navigation:{
    prevEl: '.nuestros-tarotistas-slider-btn-prev',
    nextEl: '.nuestros-tarotistas-slider-btn-next'
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