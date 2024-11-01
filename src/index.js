import "./styles.css";
import { createHome } from "./home.js";
import { createMenu } from "./menu.js";
import { createAbout } from "./about.js";

// get buttons and add event listener
const buttonHome = document.querySelector("#btn-home");
const buttonMenu = document.querySelector("#btn-menu");
const buttonAbout = document.querySelector("#btn-about");


buttonHome.addEventListener("click", () => {
    createHome();
});

buttonMenu.addEventListener("click", () => {
    createMenu();
});

buttonAbout.addEventListener("click", () => {
    createAbout();
});

//createHome();
//createMenu();
createAbout();