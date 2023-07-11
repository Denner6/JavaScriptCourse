/*
Primitivos (imutáveis) - string, number, boolean, undefined, numm (bigint, symbol)

Referência (mutável) - Arrays, object, function - Passados por referência
*/

// Coping an array

/*
const a = [1, 2, 3];
// const b = a; // Isso não copia o array, apenas o passa como referência
const b = [...a]; // isso copia o array "a" pra variável "b"

console.log(a, b);

a.push(4);
console.log(a,b);
*/

// Coping an object (or dictionary)

/*
const a = {
    name: "Luiz",
    lastName: "Otávio",
};

const b = {...a};
*/