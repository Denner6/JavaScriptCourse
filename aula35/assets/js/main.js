function main() {
    const paragraphsDiv = document.querySelector(".paragraphs");
    const paragraphs = paragraphsDiv.querySelectorAll("p");
    const bodyStyle = getComputedStyle(document.body);
    const bodyBackgroundColor = bodyStyle.backgroundColor;
    console.log(bodyBackgroundColor);
    for (let p of paragraphs) {
        p.style.color = "#FFFFFF";
        p.style.padding = "3px";
        p.style.backgroundColor = bodyBackgroundColor;
    }
}

main();

// bloco 10 37:00
