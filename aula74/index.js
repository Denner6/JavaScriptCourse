function random(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random()* (max - min) + min);
}

function esperaAi(msg, time) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== "string") reject(new TypeError("MSG must be a string"));

        setTimeout(() => {
            resolve(msg);
        }, time)
    });
}

esperaAi("Frase 1", random(1, 3))
    .then(response => {
        console.log((response));
        return esperaAi("Frase 2", random(1, 3))
    })
    .then(response => {
        console.log((response));
        return esperaAi("Frase 3", random(1, 3))
    })
    .then(response => {
        console.log((response));
    })
    .catch(error => {
        console.log("An error occurred.");
    });


// block 20 9:15