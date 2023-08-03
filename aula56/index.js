// Filter

// Retorne os números maiores que 10

// const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22];
// const filterNumbers = numbers.filter(value => value > 10);

// console.log(filterNumbers);

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com "a"

const people = [ 
    { name: "Luiz", age: 62 },
    { name: "Maria", age: 23 },
    { name: "Eduardo", age: 55 },
    { name: "Letícia", age: 19 },
    { name: "Rosane", age: 32 },
    { name: "Wallace", age: 47 },
]

const peopleWithBigName = people.filter(object => object.name.length > 5);
const olderThan50Years = people.filter(object => object.age > 50);
const lastLetterIsA =  people.filter(object => {
    const name = object.name.toLowerCase()
    return name.endsWith("a");
});

console.log(peopleWithBigName);
console.log(olderThan50Years);
console.log(lastLetterIsA);

// block 15 1:07:16