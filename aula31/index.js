// ... rest, ... spread
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [firstNumber, secondNumber, ...othersNumbers] = numbers;

// console.log(firstNumber, secondNumber, othersNumbers);

// Usando objects

const pessoa = {
    nome: "Luiz",
    sobrenome: "Miranda",
    idade: 30,
    endereco: {
        rua: "Av Brasil",
        numero: 320
    }
};

// const { nome="", sobrenome, idade } = pessoa;
// const { nome: test="", sobrenome, idade } = pessoa;
// const { endereco: { rua, numero }, endereco} = pessoa;
const { nome, ...resto} = pessoa;
console.log(nome, resto);