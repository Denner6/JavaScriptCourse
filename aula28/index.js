const date = new Date();
const dayOfTheWeek = date.getDay();
const days = {
    0: "Domingo",
    1: "Segunda",
    2: "Terça",
    3: "Quarta",
    4: "Quinta",
    5: "Sexta",
    6: "Sábado",
    test() {
        console.log(this[0]);
    }
};
let dayOfTheWeekText = days[dayOfTheWeek];

// switch (dayOfTheWeek) {
//     case 0:
//         dayOfTheWeekText = "Domingo";
//         break
//     case 1:
//         dayOfTheWeekText = "Segunda";
//         break
//     case 2:
//         dayOfTheWeekText = "Terça";
//         break
//     case 3:
//         dayOfTheWeekText = "Quarta";
//         break
//     case 4:
//         dayOfTheWeekText = "Quinta";
//         break
//     case 5:
//         dayOfTheWeekText = "Sexta";
//         break
//     case 6:
//         dayOfTheWeekText = "Sábado";
//         break
//     default:
//         dayOfTheWeekText = '';
// }
console.log(dayOfTheWeekText || "Unknow");
console.log(days.test())