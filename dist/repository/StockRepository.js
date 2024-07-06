"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockRepository = void 0;
class StockRepository {
    constructor() {
        this.stockList = [];
    }
    addStock(stock) {
        this.stockList.push(stock);
    }
    stockById(id) {
        return this.stockList.find(item => item.id === id);
    }
    allStocks() {
        return this.stockList;
    }
    deleteStock(stock) {
        const index = this.stockList.indexOf(stock);
        if (index !== -1) {
            this.stockList.splice(index, 1);
        }
    }
    updateStockRepository(id, stock) {
        const index = this.stockList.findIndex(s => s.id === id);
        console.log(index);
        if (index !== -1)
            this.stockList[index] = stock;
    }
}
exports.StockRepository = StockRepository;
