/*
Object.values
Object.entries
Object.assingn(des, any)
Object.getOwnPropertyDescriptor(o, "prop")
... (spread)

// Já vimos
Object.keys(retorna as chaver)
Object.freeze(congela o objeto)
Object.defineProperties(define várias propriedades)
Object.defineProperty(define uma propriedade)
*/

const product = {
    name: "Mug",
    price: 1.8
};
console.log(Object.entries(product));

// console.log(Object.getOwnPropertyDescriptor(product, "name"));
// const anotherThing = {...product};
// const anotherThing = Object.assign({}, product, { material: "porcelain" });

// anotherThing.name = "T-Shirt";
// anotherThing.price = 2.5

// console.log(anotherThing);


