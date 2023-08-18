const _velocity = Symbol();
class Car {
    constructor (name) {
        this.name = name;
        this[_velocity] = 0;
    }

    set velocity(value) {
        if (typeof value !== "number") return;
        if (value >= 100 || value <= 0) return;
        this[_velocity] = value;
    }

    get velocity() {
        return this[_velocity];
    }
    speedUp () {
        if(this.velocity >= 100) return;
        this.velocity++;
    }
    
    brake () {
        if(this.velocity <= 0) return;
        this.velocity--;
    }
}

const c1 = new Car("Fusca");

for (let i = 0; i <= 200; i++) {
    c1.speedUp();
    console.log(c1);
}

// block 19 39:50