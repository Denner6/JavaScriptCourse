// Arrays

// const names = ["Eduardo", "Maria", "Joana", "Wallace", "Rosana"];
// const newNames = names.slice(1, -2);
// console.log(newNames);

// ***********************************

// let name = "Luiz Otávio Miranda";
// name = name.split(" ");

// console.log(name);

// ***********************************

const names = ["Eduardo", "Maria", "Joana", "Wallace", "Rosana"];

// nomes.splice(índice, delete, element1, element2, element3);

const removed = names.splice(-1, Number.MAX_VALUE);

// Unshift 
// nomes.splice(0, 0, "luiz", "otavio")
// Push
// nomes.splice(nomes.lenght, 0, "Luiz")

console.log(names);
console.log(removed);