function sum(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        // throw("X and Y must be numbers") // primeira forma de lançar erro
        throw new TypeError("X and Y must be numbers") // segunda forma de lançar erros (essa é a mais parecida com um erro padrão do javascript)
    }
    return x + y;
}

try {
    console.log(sum(1, 2));
    console.log(sum("0", 2));
} catch (error) {
    // console.error(error);
}