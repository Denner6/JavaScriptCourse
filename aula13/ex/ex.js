let varA = 'A';
let varB = 'B';
let varC = 'C';
const varAtemp = varA;

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);