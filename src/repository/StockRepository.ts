import { Stock } from "../models/Stock";

export class StockRepository {
    stockList: Stock[] = [];
    addStock(stock: Stock) {
        this.stockList.push(stock);
    }

    stockById(id: number): Stock | undefined {
        return this.stockList.find(item => item.id === id);
    }

    allStocks(): Stock[] {
        return this.stockList;
    }

    deleteStock(stock: Stock) {
        const index = this.stockList.indexOf(stock);
        if (index !== -1) {
            this.stockList.splice(index, 1);
        }
    }

    updateStockRepository(id: number, stock: Stock): void {
        const index = this.stockList.findIndex(s => s.id === id);
        console.log(index);
        if (index !== -1) this.stockList[index] = stock;
    }

}