"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockService = void 0;
const Stock_1 = require("../models/Stock");
const StockRepository_1 = require("../repository/StockRepository");
class StockService {
    constructor() {
        this.stockRepository = new StockRepository_1.StockRepository;
    }
    addStock(stockData) {
        const { breadId, quantity, salePrice } = stockData;
        if (!stockData) {
            throw new Error("Informações incompletas");
        }
        const foundStock = this.searchStock(undefined);
        if (foundStock) {
            throw new Error("Produto já cadastrado!!!");
        }
        const newStock = new Stock_1.Stock(breadId, quantity, salePrice);
        this.stockRepository.addStock(newStock);
        console.log(newStock);
        return newStock;
    }
    searchStock(id) {
        if (id) {
            console.log("Com ID");
            const idNumber = parseInt(id, 10);
            return this.stockRepository.stockById(idNumber);
        }
        console.log(id);
        return undefined;
    }
    allStock(ordem) {
        return this.stockRepository.allStocks();
    }
    deleteStock(id) {
        const item = this.searchStock(id);
        if (!item) {
            throw new Error("Produto não encontrado");
        }
        this.stockRepository.deleteStock(item);
    }
    updateStock(id, stock) {
        const bread = this.searchStock(id.id);
        if (!bread) {
            throw new Error("Produto não encontrado");
        }
        this.stockRepository.updateStockRepository(id, stock);
        /*
                const { id, name, vegan } = breadData;
                if (!name || vegan != true || vegan != false) {
                    throw new Error("Informações incompletas");
                }
        
                let foundBread = this.breadRepository.breadById(id);
                if (!foundBread) {
                    throw new Error("Produto não cadastrado!!!");
                }
                foundBread.name = name;
                foundBread.vegan = vegan;
                this.breadRepository.updateBreadRepository(id, foundBread);
                return foundBread;
                */
    }
}
exports.StockService = StockService;
