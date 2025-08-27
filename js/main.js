const hambaga = document.querySelector('.hambaga');
const navbar = document.querySelector('.navbar');
const links = document.querySelectorAll(".nav_menu_link");
hambaga.addEventListener("click", function () {
    navbar.classList.toggle("open");
})

// when click a link close menu 
    links.forEach((link) =>{
        link.addEventListener("click", () =>{
            navbar.classList.remove("open");
        })
    })