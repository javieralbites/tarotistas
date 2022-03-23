// PANO LOADING
document.addEventListener('DOMContentLoaded', () => {
  let tl = gsap.timeline()
  tl.to('.loadingPano img', {
    opacity: 0,
    delay: 1,
  })
  tl.to('.loadingPano', {
    y: '-100%',
    delay: .5,
    duration: 0.5,
    ease: 'power4'
  })
  // tl.from('.nav-container .logo', {
  //   opacity: 0,
  //   duration: 1
  // })
  // tl.from('.nav-links a ', {
  //   opacity: 0,
  //   duration: 1,
  //   stagger: .2
  // })
})

// NAV 
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (!document.querySelector(".menu").classList.contains("change")) {
    nav.classList.toggle("sticky", window.scrollY > 0);
  }
});

// MENU 
// function menuOnClick() {
//   document.querySelector(".menu-btn").classList.toggle("change");
//   document.querySelector(".menu").classList.toggle("change");
//   if (window.scrollY > 0) {
//     document.querySelector("nav").classList.toggle("sticky")
//   }
// }

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

// MENU MOBILE
var tlMenuMobile = gsap.timeline({
  paused: true
})
tlMenuMobile.fromTo(".menu", {
  display: "none"
}, {
  display: "inline-flex",
  duration: 0.1
});
tlMenuMobile.fromTo(".menu", {
  opacity: 0
}, {
  opacity: 1,
  duration: 0.5
})
tlMenuMobile.fromTo(".menu ul li a", {
  opacity: 0,
  y: 10
}, {
  opacity: 1,
  stagger: 0.1,
  y: 0,
})

function menuMobileOnClick() {
  document.querySelector(".menu-btn").classList.toggle("change");
  document.querySelector(".menu").classList.toggle("change");
  document.querySelector("nav").classList.toggle("active")
  if (window.scrollY > 0) {
    document.querySelector("nav").classList.toggle("sticky")
  }
  if (!document.querySelector(".btn-menu-mobile").classList.contains("active")) {
    document.querySelector(".btn-menu-mobile").classList.add("active")
    document.querySelector(".nav-mobile").classList.add("active")
    document.querySelector(".btn-menu-mobile-cuenta").classList.add("active")
    document.querySelector(".btn-menu-mobile-call").classList.add("active")
    tlMenuMobile.play();
  } else {
    tlMenuMobile.reverse();
    document.querySelector(".btn-menu-mobile").classList.remove("active");
    document.querySelector(".nav-mobile").classList.remove("active")
    document.querySelector(".btn-menu-mobile-cuenta").classList.remove("active")
    document.querySelector(".btn-menu-mobile-call").classList.remove("active")
  }
}

// SLIDES HOME TESTIMONIO
var swiperHome = new Swiper(".swiper-testimonio", {
  slidesPerView: "auto",
  spaceBetween: 10,
  centeredSlides: false,
  loop: true,
  navigation: {
    prevEl: '.swiper-testimonio-btn-prev',
    nextEl: '.swiper-testimonio-btn-next'
  },
  breakpoints: {
    1300: {
      spaceBetween: 200,
      centeredSlides: true,
    },
    992: {
      spaceBetween: 100,
    },
    360:{
      spaceBetween: 30,
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
var swiperHomeTarotistasMobile = new Swiper(".home-tarotistas-slides-mobile", {
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
  effect: "fade",
  navigation: {
    prevEl: '.nuestros-tarotistas-slider-btn-prev',
    nextEl: '.nuestros-tarotistas-slider-btn-next'
  },
  loop: true
})