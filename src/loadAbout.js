export function loadAbout(){
    const contentElement = document.querySelector("#content");
    const h1 = document.createElement("h1");
    const paragraph = document.createElement("p");

    h1.innerHTML = "We are Manh´s Sushi"
    paragraph.innerHTML = "Hello, we are a well established sushi restaurant with many franchise across the entire nation!";
    contentElement.appendChild(h1);
    contentElement.appendChild(paragraph);
}