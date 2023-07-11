// Function declaration
function sayHi() {
    console.log("Hi");
}

// Functions are First-class objects
// Function expression

const imAData = function () {
    console.log("I'm a data");
};

// Arrow functions
const arrowFunction = () => {
    console.log("I'm a arrow function");
};

arrowFunction();

// Inside an object

const object = {
    speak() {
        console.log("I'm speaking...");
    } 
};

object.speak()