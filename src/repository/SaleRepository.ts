import { Sale } from "../models/Sale"

export class SaleRepository {
    saleList: Sale[] = [];
    addSale(sale: Sale) {
        this.saleList.push(sale);
    }

    saleById(id: number): Sale | undefined {
        return this.saleList.find(item => item.id === id);
    }

    allSales(): Sale[] {
        return this.saleList;
    }

}