import { Sale } from "../models/Sale";
import { SaleRepository } from "../repository/SaleRepository"

export class SaleService {

    saleRespository: SaleRepository = new SaleRepository;

    addSale(saleData: any): Sale {
        const { cpf, items, total } = saleData;
        if (!saleData) {
            throw new Error("Informações incompletas");
        }

        const foundSale = this.searchSale(undefined);
        if (foundSale) {
            throw new Error("Produto já cadastrado!!!");
        }
        const newSale = new Sale(cpf, items, total);
        this.saleRespository.addSale(newSale);
        console.log(newSale);
        return newSale;
    }

    searchSale(id: any): Sale | undefined {
        if (id) {
            console.log("Com ID");
            const idNumber: number = parseInt(id, 10);
            return this.saleRespository.saleById(idNumber);
        }
        console.log(id)
        return undefined;
    }

    allSale(ordem: any): Sale[] {
        return this.saleRespository.allSales();
    }
}