import { Stock } from "../models/Stock";
import { StockRepository } from "../repository/StockRepository"

export class StockService {

    stockRepository: StockRepository = new StockRepository;

    addStock(stockData: any): Stock {
        const { breadId, quantity, salePrice } = stockData;
        if (!stockData) {
            throw new Error("Informações incompletas");
        }

        const foundStock = this.searchStock(undefined);
        if (foundStock) {
            throw new Error("Produto já cadastrado!!!");
        }
        const newStock = new Stock(breadId, quantity, salePrice);
        this.stockRepository.addStock(newStock);
        console.log(newStock);
        return newStock;
    }

    searchStock(id: any): Stock | undefined {
        if (id) {
            console.log("Com ID");
            const idNumber: number = parseInt(id, 10);
            return this.stockRepository.stockById(idNumber);
        }
        console.log(id)
        return undefined;
    }

    allStock(ordem: any): Stock[] {
        return this.stockRepository.allStocks();
    }

    deleteStock(id: any) {
        const item = this.searchStock(id);
        if (!item) {
            throw new Error("Produto não encontrado");
        }

        this.stockRepository.deleteStock(item);
    }

    updateStock(id: any, stock: any): void {
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