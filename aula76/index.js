function random(min=0, max=3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random()* (max - min) + min);
}

function esperaAi(msg, time) {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if (typeof msg !== "string") {
                reject(new TypeError("MSG must be a string"));
                return;
            }
            resolve(msg.toUpperCase() + " - Passei na Promise");
        }, time)
    });
}

// esperaAi("Fase 1", random())
//     .then(value => {
//         console.log(value);
//         return esperaAi("Fase 2", random());
//     })
//     .then(fase => {
//         console.log(fase);
//         return esperaAi("Fase 3", random());
//     })
//     .then(fase => {
//         console.log(fase);
//     })
//     .then(fase => {
//         console.log("Terminamos na fase: ", fase);
//     })
//     .catch(error => {
//         console.log(error);
//     });

async function execute() {
    try {
        const fase1 = await esperaAi("Fase 1", random());
        console.log(fase1);

        const fase2 = await esperaAi("Fase 2", random());
        console.log(fase2);

        const fase3 = await esperaAi("Fase 3", random());
        console.log(fase3);

        console.log("Terminamos na fase: ", fase3);
    } catch (error) {
        console.log(error);
    }
}

execute();

/*

Estados das promises:

Pending -> Pendente;
fullfield -> resolvida;
rejected -> rejeitada.
*/