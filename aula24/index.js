const hour = 22;

if (hour >= 0 && hour <= 11) {
    console.log("Good Morning!");
} 
else if (hour > 13 && hour <= 18){
    console.log("Good Afternoon!");
}
else if (hour > 18 && hour <= 23) {
    console.log("Good Even!");
}
else {
    console.log("Hello!");
}
