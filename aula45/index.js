// `arguments` sustenta todos os argumentos de uma função
/*
function sumNumbers() {
    let total = 0;
    for (let argument of arguments) {
        total += argument;
    }

    console.log(total);
}
sumNumbers(1, 2, 3, 4, 6, 7 );
*/

// add a satandard value to a function parameter

/*
function sum2Numbers(num1=0, num2=0) {
    console.log(num1 + num2);
}

sum2Numbers(2, 5);
*/

// NÃO RECOMENDADO
// A única forma de úlar um parâmetro de uma função é passando undefined como parâmetro:

/*
function funcao(a, b=2, c=4) {
    console.log(a + b + c);
}
//     B assume o valor de 2            
funcao(2, undefined, 20)
*/

// Podemos criar funções para desestruturar um array, ou object
/*
function funcao({name, lastName, age}) {
    console.log(name, lastName, age);
}

funcao({ name: "Deku", lastName: "Octavio", age: 30 });
*/

// Podemos usar o rest operator(...) em parâmetros de funções também
function count(operator, accumulator, ...numbers) {
    for (let number of numbers) {
        if (operator === "+") accumulator += number;
        if (operator === "-") accumulator -= number;
        if (operator === "/") accumulator /= number;
        if (operator === "*") accumulator *= number;
    }
    console.log(accumulator);
}

count("-", 0, 20, 30, 40, 50);

// block 12 41:13