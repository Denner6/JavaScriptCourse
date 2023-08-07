// Product -> aumento, desconto
// Camiseta = cor, caneca = material

function Product(name, price) {
    this.name= name;
    this.price = price;
}

Product.prototype.increase = function(amount) {
    this.price += amount
}
Product.prototype.discount = function(amount) {
    this.price -= amount
}

function TShirt(name, price, color) {
    Product.call(this, name, price);
    this.color = color;
}
TShirt.prototype = Object.create(Product.prototype);
TShirt.prototype.constructor = TShirt;

function Mug(name, price, material, stock) {
    Product.call(this, name, price);
    this.material = material;

    Object.defineProperty(this, "stock", {
        enumerable: true,
        configurable: false,
        get: function() {
            return stock;
        },
        set: function(value) {
            if (typeof value !== "number") return;
            stock = value;
        }
    })
}
Mug.prototype = Object.create(Product.prototype)
Mug.prototype.constructor = Mug;

const product = new Product("Gen", 11);
const tShirt = new TShirt("Regata", 7.5, "Preta");
const mug = new Mug("mug", 7.5, "porcelana", 5);

console.log(product);
console.log(tShirt);
console.log(mug);