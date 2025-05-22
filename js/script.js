const menuIcon = document.getElementById("menu-icon");
const menuKlik = document.getElementById("menu-list");

menuIcon.addEventListener("click", () =>{
    menuKlik.classList.toggle("hidden");
});