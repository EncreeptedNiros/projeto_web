export class Stock {
    id: number;
    breadId: number;
    quantity: number;
    salePrice: number;

    constructor(breadId: number, quantity: number, salePrice: number) {
        this.breadId = breadId;
        this.quantity = quantity;
        this.salePrice = salePrice;
        this.id = this.geraId();
    }

    private geraId(): number {
        return Date.now();
    }
}