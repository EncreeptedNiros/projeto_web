"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleRepository = void 0;
class SaleRepository {
    constructor() {
        this.saleList = [];
    }
    addSale(sale) {
        this.saleList.push(sale);
    }
    saleById(id) {
        return this.saleList.find(item => item.id === id);
    }
    allSales() {
        return this.saleList;
    }
}
exports.SaleRepository = SaleRepository;
