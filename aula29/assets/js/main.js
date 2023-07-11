function main() {
    const dateH1 = document.querySelector(".container h1");
    const date = new Date();
    const options = {
        dateStyle: 'full',
        timeStyle: 'short'
    };
    dateH1.innerHTML = `${new Intl.DateTimeFormat("pt-BR", options).format(date)}`;
}

main();
