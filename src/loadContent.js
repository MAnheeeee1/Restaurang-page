export function generateContent(imageUrl){
    const contentElement = document.getElementById("content");

    const header = document.createElement("h1");
    header.innerHTML = "Manh´s Restaurant";
    header.classList.add("Main");

    const image = document.createElement("img");
    image.src = imageUrl;
    image.classList.add("Main");

    const description = document.createElement("p");
    description.innerHTML = "The best sushi restaurant in town!";
    description.classList.add("Main");

    contentElement.appendChild(header);
    contentElement.appendChild(image);
    contentElement.appendChild(description);
}

