//access all section links
const sectionLinks = document.querySelectorAll("nav a");
//get the open and close menu buttons
const openMenuButton = document.getElementById("menuButton");
const closeMenuButton = document.getElementById("closeMenu");

const menu = document.getElementById("menu");

//function to show the menu once the open menu button is clicked
function openMenu() {
    menu.classList.add("openMenu")
}

//function to close the menu once the closeMenu or any sectioLink is clicked
function closeMenu() {
    menu.classList.remove("openMenu")
}

openMenuButton.addEventListener("click", openMenu);
closeMenuButton.addEventListener("click", closeMenu);
sectionLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
