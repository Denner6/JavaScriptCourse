// function createPerson(name, lastName, age) {
//     return { name, lastName, age };
// }

// const person1 = createPerson("Luiz", "Miranda", 25);
// const person2 = {
//     name: "Denner",
//     lastaName: "Costa",
//     age: 14,
// }

// console.log(person1);

// Using function into an object

const person2 = {
    name: "Denner",
    lastName: "Costa",
    age: 14,

    fala() {
        console.log(`${this.name} ${this.lastName}`);
    }
}

person2.fala()
