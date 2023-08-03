// Constructor function -> objects
// Factory function -> objects
// Constructor -> Pessoa

function Person(name, lastName) {
    this.name = name;
    this.lastName = lastName;
}

const p1 = new Person("Luiz", "Otávio");
const p2 = new Person("Maria", "Oliveira");

console.log(p1);
console.log(p2);