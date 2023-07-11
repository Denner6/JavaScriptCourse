// while & do while

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const [min, max] = [1, 50];
let rand;

do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);
