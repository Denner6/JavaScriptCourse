// For clássico
/*
const fruits = ["Pear", "Apple", "grape"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
*/

// for in com arrays
// For in -> lê os índices
/*
const fruits = ["Pear", "Apple", "grape"];
for (let i in fruits) {
    console.log(fruits[i]);
}
*/

// For in com objects

/*
const person = {
    name: "Luiz",
    lastName: "Otávio",
    age: 30
};

for (let key in person) {
    console.log(key, person[key]);
}
*/

// For of -> específico para objetos iteráveis (strings, arrays)

/*
const names = ["Luiz", "Otávio", "Henrique"];

for (let value of names) {
    console.log(value);
}
*/

// For each
const names = ["Luiz", "Otávio", "Henrique"];
// Obs: index e array são opcionais
names.forEach((value, index, array) => {
    console.log(value, index, array);
});
