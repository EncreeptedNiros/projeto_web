"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStockController = exports.deleteStockController = exports.allStocksController = exports.searchStockController = exports.addStockController = void 0;
const StockService_1 = require("../service/StockService");
const stockService = new StockService_1.StockService();
function addStockController(req, res) {
    try {
        const { breadId, quantity, salePrice } = req.body;
        const toStock = { breadId, quantity, salePrice };
        console.log(toStock);
        const newStock = stockService.addStock(toStock);
        res.status(201).json({
            mensagem: "Produto adicionado com sucesso!",
            pao: newStock
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.addStockController = addStockController;
;
function searchStockController(req, res) {
    try {
        const bread = parseInt(req.params.id);
        const foundStock = stockService.searchStock(bread);
        if (foundStock) {
            res.status(200).json({
                mensagem: "Produto encontrado com sucesso!",
                pao: foundStock
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
exports.searchStockController = searchStockController;
;
function allStocksController(req, res) {
    try {
        res.status(200).json(stockService.allStock(req));
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.allStocksController = allStocksController;
;
function deleteStockController(req, res) {
    try {
        stockService.deleteStock(req.params.id);
        res.status(200).json({ message: "Produto deletado com sucesso!" });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.deleteStockController = deleteStockController;
function updateStockController(req, res) {
    try {
        const { breadId, quantity, salePrice } = req.body;
        const id = parseInt(req.params.id);
        const updatedStock = { breadId, quantity, salePrice };
        const newStock = stockService.updateStock(id, updatedStock);
        res.status(201).json({
            mensagem: "Produto atualizado com sucesso!",
            bread: updatedStock
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.updateStockController = updateStockController;
;
