/*
Escreva uma função que recebe um número e retorne o seguinte:
Número é divísivel por 3: Fizz
Número é divísivel por 5: Buzz
Número é divísivel por 3 e 5: FizzBuzz
Número NÃO é divísivel por 3 e 5: Retorna o próprio npumero
Checar se o número é realmente um número
Use a função com números de 0 a 100
*/

const fizzBuzz = (number) => {
    if (!Number.isFinite(number)) return NaN;
    const comparations = { FizzBuzz: (number % 3 === 0 && number % 5 === 0), Fizz: (number % 3 === 0), Buzz: (number % 5 === 0), "": number };
    for (let key in comparations) if (comparations[key]) return key;
};

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}