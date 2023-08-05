function Product(name, price, stock) {
    this.name = name;
    this.price = price;

    Object.defineProperty(this, "stock", {
        enumerable: true, // mostra a chave
        value: stock, // valor
        writable: false, // pode alterar (ou não)
        configurable: true // configurável
    });

    Object.defineProperties(this, {
        name: {
            enumerable: true, 
            value: name, 
            writable: false, 
            configurable: true 
        },
        price: {
            enumerable: true, 
            value: price, 
            writable: false, 
            configurable: true
        }
    })
}

const p1 = new Product("Camiseta", 20, 3);
console.log(p1);
