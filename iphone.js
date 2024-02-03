let img  = document.querySelector(".img")
let container = document.querySelector(".container")
let menu = document.querySelector(".menu-icon");
let nav = document.querySelector("nav")

function phones(phone){
    img.src = phone
}
function colors(color)
{
    container.style.background = color
}

menu.onclick = function () {
    menu.classList.toggle("active");
    nav.classList.toggle("open")
};
