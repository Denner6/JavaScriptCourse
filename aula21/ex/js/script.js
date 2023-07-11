function initialEscope() {
    let form = document.querySelector(".form");
    const result = document.querySelector(".result")
    const persons = [];

    function sendForm(event) {
        event.preventDefault()
        const name = form.querySelector(".name");
        const lastName = form.querySelector(".lastName");
        const weight = form.querySelector(".weight");
        const height = form.querySelector(".height");
        const person = [name.value, lastName.value, weight.value, height.value]

        const personsFactory = (name, lastName, weight, height) => {
            return {name, lastName, weight, height};
        };

        persons.push(
            personsFactory(...person)
        );

        result.innerHTML += `<span>${person.join(" ")}</span><br><br>`
        console.log(persons);
        form = document.querySelector('.form');
        form.reset()
    }
    
    form.addEventListener("submit", sendForm);
}

initialEscope();