function random(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random()* (max - min) + min);
}

function esperaAi(msg, time) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== "string") {
            reject(new TypeError("MSG must be a string"));
            return;
        }

        setTimeout(() => {
            resolve(msg.toUpperCase() + " - Passei na Promise");
        }, time)
    });
}

// Promise.all Promise.race Promise.resolve Promise.reject
/*
Promise.all -> Resolve todas as promisses em um array e entrega um array resultante com os resultados de cada uma das promises
Promise.race -> Pega o valor que foi retornado primeiro das promises em um array
*/

// const promises = [
//     esperaAi("Promise 1", random(1,5)),
//     esperaAi("Promise 2", random(1,5)),
//     esperaAi("Promise 3", random(1,5)),
//     // esperaAi(1000, 1000),
// ];

function downloadPage() {
    const cached = true;
    if(cached) {
        return Promise.reject("Page cached.");
    } else {
        return esperaAi("Page downloaded", 3000);
    }
}

downloadPage()
    .then(pageData => {
        console.log(pageData);
    })
    .catch(error => {
        console.log(error);
    });