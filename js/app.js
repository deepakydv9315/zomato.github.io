const burger = document.querySelector(".burger-menu")
const navLink = document.querySelector(".nav-link")

burger.addEventListener("click" , action)

function action(){
    navLink.classList.toggle("new-nav-link")
}