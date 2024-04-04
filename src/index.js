import { generateContent } from "./loadContent";
import { loadMenu } from "./loadMenu";
import { loadAbout } from "./loadAbout";
import Image from "./sushi.jpg";
import "./style.css"

generateContent(Image);

function clearContent(){
    const content = document.querySelector("#content");
    content.remove();
    const contentElement = document.createElement("div");
    contentElement.setAttribute("id", "content");
    document.body.appendChild(contentElement);
}
const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");
aboutBtn.onclick = function (){
    clearContent();
    loadAbout();
}
menuBtn.onclick = function (){
    clearContent();
    loadMenu();
}
homeBtn.onclick = function (){
    clearContent()
    generateContent(Image)
}