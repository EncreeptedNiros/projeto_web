"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allSalesController = exports.searchSaleController = exports.addSaleController = void 0;
const SaleService_1 = require("../service/SaleService");
const StockService_1 = require("../service/StockService");
const saleService = new SaleService_1.SaleService();
const stockService = new StockService_1.StockService();
function addSaleController(req, res) {
    try {
        const { cpf, items, total } = req.body;
        const toSale = { cpf, items, total };
        const newSale = saleService.addSale(toSale);
        res.status(201).json({
            mensagem: "Produto adicionado com sucesso!",
            pao: newSale
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.addSaleController = addSaleController;
;
function searchSaleController(req, res) {
    try {
        const sale = parseInt(req.params.id);
        const foundSale = saleService.searchSale(sale);
        if (foundSale) {
            res.status(200).json({
                mensagem: "Produto encontrado com sucesso!",
                pao: foundSale
            });
        }
        else {
            res.status(404).json({ mensagem: "Produto não encontrado." });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.searchSaleController = searchSaleController;
;
function allSalesController(req, res) {
    try {
        res.status(200).json(saleService.allSale(req));
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.allSalesController = allSalesController;
;
