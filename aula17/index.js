const students = ["Luiz", "Maria", "João"];

console.log(students instanceof Array);


// console.log(students.slice(-1)[0]);

// delete students[1] // Deleta um valor de um array sem alterar os índices
// const person = students.shift(); // Remove o primeiro elemento do array e permite salvá-lo em uma variável
// const person = students.pop(); // Remove do final do array e permite salvar em uma variável

// students.unshift("Luiza") // Adiciona no começo sem substituir o primeiro valor

// students.push("Luiza"); // Adiciona no fim
// students.push("Fábio"); // Adiciona no fim

// students[3] = "Carlos"; // Se você tentar acessar um item inesistente, um erro não será retornado, e sim undefined.
// Alterando o valor de uma posição inesistente do array, você está fazendo nada mais que adicionar um valor ao final do array

/*
Adiciona no fim
students[students.lenght] = "Luiza";
students[students.lenght] = "Fábio";
students[students.lenght] = "Luana";

It works
*/