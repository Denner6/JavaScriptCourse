class Person {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    speak() {
        console.log(`${this.name} is speaking`);
    }

    eating() {
        console.log(`${this.name} is eating`);
    }

    drinking() {
        console.log(`${this.name} is drinking`);
    }
}

const p1 = new Person("Luiz", "Miranda");
// console.log(p1);

