import "@fortawesome/fontawesome-free/css/all.css";
import "./styles.css";
import "./home.css";
import "./menu.css";
import "./about.css";

import { createHome } from "./home.js";
import { createMenu } from "./menu.js";
import { createAbout } from "./about.js";
import { data } from "./data.js";

const container = document.querySelector("#content");
const btnHome = document.querySelector("#btn-home");
const btnMenu = document.querySelector("#btn-menu");
const btnAbout = document.querySelector("#btn-about");

function setModule(module, createModule, data) {
  container.innerHTML = "";
  container.classList.remove("module-home", "module-menu", "module-about");
  container.classList.add(module);
  createModule(container, data);
}

function setActiveButton(activeButton) {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });
  activeButton.classList.add("active");
}

btnHome.addEventListener("click", () => {
  setModule("module-home", createHome, data.home);
  setActiveButton(btnHome);
});

btnMenu.addEventListener("click", () => {
  setModule("module-menu", createMenu, data.menu);
  setActiveButton(btnMenu);
});

btnAbout.addEventListener("click", () => {
  setModule("module-about", createAbout, data.about);
  setActiveButton(btnAbout);
});

setModule("module-home", createHome, data.home);
setActiveButton(btnHome);
