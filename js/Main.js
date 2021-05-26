let sidenav = document.querySelector(".dfz-sidenav");
let navM = document.querySelector(".dfz-sidenav .nav-m");
let navbar = document.querySelector('.dfz-navbar');


window.addEventListener('scroll', () => {
  if(window.pageYOffset === 0){
    navbar.classList.remove('scrolled');
  } else {
    navbar.classList.add('scrolled');
  }
})

document.getElementById("nav-btn").addEventListener("click", () => {
  navM.classList.remove('slideOutLeft');
  navM.classList.add('slideInLeft');
  sidenav.classList.remove('fadeOut');
  sidenav.classList.add('fadeIn');
  sidenav.classList.remove("dfz-not-show");
})

document.querySelector(".dfz-sidenav .overlay").addEventListener("click", () => {
  if(event.target == document.querySelector(".dfz-sidenav .overlay")) {
    navM.classList.remove('slideInLeft');
    navM.classList.add('slideOutLeft');
    sidenav.classList.remove('fadeIn');
    
    setTimeout(function(){ 
      sidenav.classList.add('fadeOut');
      setTimeout(function(){ sidenav.classList.add("dfz-not-show");}, 250);
    }, 300);
    
  }
})

let navDropdownsM = [...document.querySelectorAll(".dfz-sidenav .nav-m nav li.hs-menu-depth-1.hs-item-has-children")];
navDropdownsM.forEach(dd => {
  dd.innerHTML += "<button class='dd-btn'><i class='fas fa-chevron-down'></i></button>";
})

let ddBtns = [...document.querySelectorAll(".dfz-sidenav .dd-btn")];
ddBtns.forEach( btn => {
  let parent = btn.parentElement;
  let child = btn.parentElement.querySelector(".hs-menu-children-wrapper");
  child.classList.add("animated", "fadeIn", "faster");
  btn.addEventListener("click", () => {
    child.classList.toggle("dfz-show");
  })
})

$('.accordion-1').on('show.bs.collapse', function () {
  let arrowAccordion = document.querySelector(".arrow-1");
  arrowAccordion.classList.add("arrow-active");
})

$('.accordion-1').on('hidden.bs.collapse', function () {
  let arrowAccordion = document.querySelector(".arrow-1");
  arrowAccordion.classList.remove("arrow-active");
})

$('.accordion-2').on('show.bs.collapse', function () {
  let arrowAccordion = document.querySelector(".arrow-2");
  arrowAccordion.classList.add("arrow-active");
})

$('.accordion-2').on('hidden.bs.collapse', function () {
  let arrowAccordion = document.querySelector(".arrow-2");
  arrowAccordion.classList.remove("arrow-active");
})

$('.accordion-3').on('show.bs.collapse', function () {
  let arrowAccordion = document.querySelector(".arrow-3");
  arrowAccordion.classList.add("arrow-active");
})

$('.accordion-3').on('hidden.bs.collapse', function () {
  let arrowAccordion = document.querySelector(".arrow-3");
  arrowAccordion.classList.remove("arrow-active");
})
