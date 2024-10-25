import "./styles.css";
import { createHomePage, createMenuPage, createAboutPage } from "./load-page.js";

createHomePage();

const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const aboutButton = document.querySelector("#about-button");

homeButton.addEventListener("click", createHomePage);
menuButton.addEventListener("click", createMenuPage);
aboutButton.addEventListener("click", createAboutPage);
