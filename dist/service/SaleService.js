"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleService = void 0;
const Sale_1 = require("../models/Sale");
const SaleRepository_1 = require("../repository/SaleRepository");
class SaleService {
    constructor() {
        this.saleRespository = new SaleRepository_1.SaleRepository;
    }
    addSale(saleData) {
        const { cpf, items, total } = saleData;
        if (!saleData) {
            throw new Error("Informações incompletas");
        }
        const foundSale = this.searchSale(undefined);
        if (foundSale) {
            throw new Error("Produto já cadastrado!!!");
        }
        const newSale = new Sale_1.Sale(cpf, items, total);
        this.saleRespository.addSale(newSale);
        console.log(newSale);
        return newSale;
    }
    searchSale(id) {
        if (id) {
            console.log("Com ID");
            const idNumber = parseInt(id, 10);
            return this.saleRespository.saleById(idNumber);
        }
        console.log(id);
        return undefined;
    }
    allSale(ordem) {
        return this.saleRespository.allSales();
    }
}
exports.SaleService = SaleService;
