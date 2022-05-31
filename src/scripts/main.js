"use strict";

var copyright = document.querySelector(".current-year");
copyright.innerText = new Date().getFullYear();

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  "use strict";

const darkTheme = document.querySelector(".btn--theme");

//Gérer le data-theme du body
darkTheme.addEventListener("click", function(){
    if(document.body.getAttribute("data-theme") === "dark"){
        light();
        localStorage.setItem("theme", "light");
    } else {
        dark();
        localStorage.setItem("theme", "dark");
    } 
});

//Est ce que l"utilisateur veut un theme dark?
const userDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

//Est ce que l'utilisateur a déjà indiqué une préférence sur notre site?
let theme = localStorage.getItem("theme");
if((!theme && userDark) || (theme === "dark")){
    dark();
} else if(theme === "light"){
    light();
}

//function pour le dark
function dark(){
    document.body.setAttribute("data-theme", "dark");
}
//function pour le light
function light(){
    document.body.setAttribute("data-theme", "light");
}