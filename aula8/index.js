const name = "Denner";
const lastName = "Costa";
const age = 14;
const weight = 55;
const heightInMetters = 1.73;
let bodyMassIndex = weight / (heightInMetters**2)
let yearOfBirth = 2023 - age;

console.log(`${name} ${lastName} tem ${age} anos, pesa ${weight}kg.`);
console.log(`tem ${heightInMetters} de altura e seu IMC é ${bodyMassIndex}`);
console.log(`${name} nasceu em ${yearOfBirth}`)