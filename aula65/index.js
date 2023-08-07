/*
Javascript é baseado em protótipos para passar propriedades e métodos de um objeto para o outro.

Definição de protótipo
Protótipo é o termo usado para se referir ao que foi criado ela primeira vez,
servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protóripo (__proto__)
que vem da propriedade prototype da função construtora que foi usada para criá-lo.
Quando tentamos acessar um membro no próprio objeto e depois a cadeia de protótipos
é usada até o topo (null) até encontrar (ou não) tal membro.
*/

function Person(name, lastName) {
    this.name = name;
    this.lastName = lastName;
    this.completeName = () => this.name + " " + this.lastName;
}

Person.prototype.completeName = () => this.name + " " + this.lastName;

// instance
const person1 = new Person("Luiz", "Otávio"); // <- Person = Constructor function
const data = new Date(); // <- Person = Constructor function

console.dir(person1);
console.dir(data);
 