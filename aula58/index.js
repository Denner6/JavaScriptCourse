// Reduce

// Some todos os números
// const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const total = numbers.reduce((accumulator, value, index, array) => {
//     if (value % 2 === 0) accumulator += value;
//     return accumulator;
// }, 0);

// console.log(total);


// Retorne a pessoa mais velha

const people = [ 
    { name: "Luiz", age: 62 },
    { name: "Maria", age: 23 },
    { name: "Eduardo", age: 55 },
    { name: "Letícia", age: 19 },
    { name: "Rosane", age: 64 },
    { name: "Wallace", age: 47 },
]

const older = people.reduce((accumulator, value) => {
    if (accumulator.age > value.age) return accumulator;
    return value;
});

console.log(older);