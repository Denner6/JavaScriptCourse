function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.discount = function(percentage) {
    this.price = this.price - (this.price * (percentage / 100));
};

Product.prototype.increasePrice = function(percentage) {
    this.price = this.price + (this.price * (percentage / 100));
};

const p1 = new Product("T-Shirt", 50);

const p2 = {
    name: "Mug",
    price: 15
};

Object.setPrototypeOf(p2, Product.prototype);

const p3 = Object.create(Product.prototype);

console.log(p3);