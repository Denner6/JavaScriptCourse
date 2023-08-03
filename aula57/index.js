// Map

/*
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22];
const numbersDouble = numbers.map(value => value * 2);
console.log(numbersDouble);
*/

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const people = [ 
    { name: "Luiz", age: 62 },
    { name: "Maria", age: 23 },
    { name: "Eduardo", age: 55 },
    { name: "Letícia", age: 19 },
    { name: "Rosane", age: 32 },
    { name: "Wallace", age: 47 },
]

const names = people.map(object => object.name);
const withoutName = people.map(object => ({ age : object.age }));
const peopleWithId = people.map((object, index) => {
    const newObject = {...object};
    newObject.id = index;
    return newObject;
});

console.log(names);
console.log(withoutName);
console.log(peopleWithId);
