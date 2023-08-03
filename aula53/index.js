// Function generation

function* generator1 () {
    yield "Value 1";
    yield "Value 2";
    yield "Value 3";
}

function* generator2() {
    let i = 0;

    while (true) {
        yield i;
        i++;
    }
}

function* generator3 () {
    yield 0;
    yield 1;
    yield 2;
}

function* generator4 () {
    yield* generator3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = generator4();

console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);