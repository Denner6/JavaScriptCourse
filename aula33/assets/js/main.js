const elements = [
    {tag: "p", text: "Frase 1"},
    {tag: "div", text: "Frase 2"},
    {tag: "footer", text: "Frase 3"},
    {tag: "section", text: "Frase 4"},
]
const mainSection = document.querySelector(".container");
const div = document.createElement("div");

for (let i = 0; i < elements.length; i++) {
    const {tag, text} = elements[i];
    const element = document.createElement(tag);
    element.innerText = text;
    div.appendChild(element);
}

mainSection.appendChild(div)

/*
existem algumas formas de adicioar texto no html de um site, veja 3 delas:

podemos usar o element.innerHTML, ou o element.innerText ou podemos criar um node text:

let createdTag = document.createElement(tag)
let createdText = document.createTextNode(texto)
createdTag.appendChild(createdText)
*/

