function createPerson(name, lastName) {
    const personPrototype = {
        talk() {
            console.log(`${this.name} is talking...`);
        },
        eat() {
            console.log(`${this.name} is eating...`);
        },
        drink() {
            console.log(`${this.name} is drinking...`);
        },
    };
    return Object.create(personPrototype, {
        name: { value: name },
        lastName: { value: lastName}
    });
}

const p1 = createPerson("Luiz", "Otávio");
console.log(p1);