"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stock = void 0;
class Stock {
    constructor(breadId, quantity, salePrice) {
        this.breadId = breadId;
        this.quantity = quantity;
        this.salePrice = salePrice;
        this.id = this.geraId();
    }
    geraId() {
        return Date.now();
    }
}
exports.Stock = Stock;
