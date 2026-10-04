class Computers {
    constructor(brand, ram, storage) {
        this.brand = brand;
        this.ram = ram;
        this.storage = storage;
    }

    getBrand() {
        return this.brand;
    }
}

class Laptops extends Computers {
    constructor(brand, ram, storage, weight) {
        super(brand, ram, storage);
        this.weight = weight;
    }
}

const laptop1 = new Laptops("Asus", 16, 512, 2);

console.log(laptop1);
console.log(laptop1.getBrand());