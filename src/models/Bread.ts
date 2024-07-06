export class Bread {
    id: number;
    price: number;
    name: string;
    vegan: boolean;

    constructor(name: string, vegan: boolean, price: number) {
        this.name = name;
        this.price = price;
        this.vegan = vegan;
        this.id = this.geraId();
    }

    private geraId(): number {
        return Date.now();
    }
}