const number = Number(prompt("Type a number: "));

const numberSpan = document.querySelectorAll(".number-span");
const squareRoot = document.querySelector(".square-root");
const isInteger = document.querySelector(".is-Integer");
const numberIsNaN = document.querySelector(".is-NaN");
const roundDown = document.querySelector(".round-down");
const roundUp = document.querySelector(".round-up");
const twoDecimalPlaces = document.querySelector(".two-decimals-places");

numberSpan[0].innerHTML = number;
numberSpan[1].innerHTML = number;

squareRoot.innerHTML = number ** 0.5;
isInteger.innerHTML = Number.isInteger(number);
numberIsNaN.innerHTML = Number.isNaN(number);
roundDown.innerHTML = Math.floor(number);
roundUp.innerHTML = Math.ceil(number);
twoDecimalPlaces.innerHTML = number.toFixed(2);
