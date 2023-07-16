function createPerson(name, lastName, height, weight) {
    return {
        name,
        lastName,
        // Getter
        get completeName() {
            return `${this.name} ${this.lastName}`;
        },
        // Setter
        set completeName(value) {
            value = value.split(" ");
            this.name = value.shift();
            this.lastName = value.join(" ");
        },
        weight,
        height, 
        speak (subject) {
            return `${name} is ${subject}`;
        },
        // Getter
        get imc() { // finge ser um atributo
            const calculation = this.weight / (this.height ** 2);
            return calculation.toFixed(2);
        },
    };
}

const p1 = createPerson("Luiz", "Otávio", 1.80, 80);
p1.completeName = "Maria Oliveira Silva";
console.log(p1.speak("Talking about JS."));
console.log(p1.imc);
console.log(p1.completeName);