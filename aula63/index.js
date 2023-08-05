function Product(name, price, stock) {
    this.name = name;
    this.price = price;

    Object.defineProperty(this, "stock", {
        enumerable: true, // mostra a chave
        configurable: true, // configurável
        get: () => {
            return stock;
        },
        set: value => {
            if (typeof value !== "number") {
                throw new TypeError("'stock' must be a number");
            }
            stock = value;
        }
    });
}

function createProduct(name) {
    return {
        get name() {
            return name;
        },
        set name(value) {
            name = value;
        }
    }
}
const p1 = new Product("Camiseta", 20, 3);
p1.stock = 5;
console.log(p1);
console.log(p1.stock);

const p2 = createProduct("Camiseta");
p2.name = "Qualquer coisa";
console.log(p2.name);
