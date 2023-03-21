'use strict'; 



    // This is the Navbar section


const navbar = document.querySelector("[data-navbar]"); 
const navbarLinks = document.querySelector("[data-navbar-link]"); 
const menuToggleBtn = document.querySelector("[data-nav-toggle-btn]"); 


menuToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active"); 
  this.classList.toggle("active"); 
}); 

for (let i = 0; i < navbarLinks.length; i++){ 
  navbarLinks[i].addEventListener("click", function() {
    navbar.classList.toggle("active"); 
    menuToggleBtn.classList.toggle("active"); 
  });
}




const header = document.querySelector("[data-header]"); 


window.addEventListener("scroll", function() {
  if (window.scrollY >=100) {
  header.classList.add("active"); 
  backTopBtn.classList.add("active"); 
}else{ 
  header.classList.remove("active"); 
}
}); 



const searchBtn = document.querySelector("[data-search-btn]"); 
const searchContainer = document.querySelector("[data-search-container]"); 
const searchSubmitBtn = document.querySelector("[data-search-submit-btn]"); 
const searchCloseBtn = document.querySelector("[data-search-close-btn]"); 


const searchBoxElems = [searchBtn, searchSubmitBtn, searchCloseBtn]; 

for (let i = 0; 1 < searchBoxElems.length; i++) {
  searchBoxElems[i].addEventListener("click", function() {
    searchContainer.classList.toggle("active"); 
    document.body.classList.toggle("active"); 
  }); 
}
