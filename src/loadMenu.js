export function loadMenu(){
    const contentElement = document.querySelector("#content");
    const h1 = document.createElement("h1");
    h1.innerHTML = "Menu releasing soon!, Stay tuned!";
    h1.setAttribute("font-size", "30px");

    contentElement.appendChild(h1);
}