/*try {
    
} catch (error) {

} finally {
    // sempŕe será executado independentemente de ter erro ou não
} */

function returnHour(date) {
    if (date && !(date instanceof Date)) throw new TypeError("date must be a instance of Date.");
    if (!date) date = new Date();
    return date.toLocaleTimeString("pt-BR", {
        hour12: false
    })
}

try {
    console.log(returnHour(11));
} catch (error){
    // Tratar error
} finally {
    console.log("Tenha um bom dia");
}