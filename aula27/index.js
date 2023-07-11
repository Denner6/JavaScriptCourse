/*
Para converter horas para milésimos de segundos (que é com o que o objeto Date trabalha),
devemos fazer 60 * 60 * quantidadeDeHoras * 1000
*/
// const date = new Date("2023-05-25 12:10:00"); // year, month, day, hour, minute, second, milliseconds
/*
const date = new Date(); // year, month, day, hour, minute, second, milliseconds
console.log(date.toString());
console.log("Day", date.getDate());
console.log("Month", date.getMonth() + 1); // Mês começa do zero
console.log("Year", date.getFullYear());
console.log("Hour", date.getHours());
console.log("Minutes", date.getMinutes());
console.log("Seconds", date.getSeconds());
console.log("Milliseconds", date.getMilliseconds());
console.log("Day of the week", date.getDay()); // 0 - Domingo, 6 - Sábado
*/

function zeroToTheLeft(number) {
    return number >= 10 ? number : `0${number}`;
}

function formatDate(date) {
    const day = date.getDate();
    const month = zeroToTheLeft(date.getMonth() + 1);
    const year = date.getFullYear();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`; 
}

const date = new Date();
const brazilDate = formatDate(date);

console.log(brazilDate);