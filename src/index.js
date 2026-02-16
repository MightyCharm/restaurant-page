import "@fortawesome/fontawesome-free/css/all.css";
import "./styles.css";
import { createHome } from "./home.js";
import { createMenu } from "./menu.js";
import { createAbout } from "./about.js";

// get buttons and add event listener
const buttonHome = document.querySelector("#btn-home");
const buttonMenu = document.querySelector("#btn-menu");
const buttonAbout = document.querySelector("#btn-about");

function clearGrid() {
  const divContent = document.querySelector("#content");
  let child = divContent.firstChild;
  while (child) {
    divContent.removeChild(child);
    child = divContent.firstChild;
  }
}

buttonHome.addEventListener("click", () => {
  clearGrid();
  createHome();
});

buttonMenu.addEventListener("click", () => {
  clearGrid();
  createMenu();
});

buttonAbout.addEventListener("click", () => {
  clearGrid();
  createAbout();
});

createHome();
