/*
Operadores lógicos
&& -> AND
|| -> OR
! -> NOT

FALSY
*false
0
'' "" ``
null / undefined
NaN
*/

// && -> AND
/*
function sayHi() {
    return "Hi";
}

const willExecute = false;

console.log(willExecute && sayHi());
*/

// || -> OR

/*
const userColor = null;
const standardColor = userColor || "red";
*/

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);