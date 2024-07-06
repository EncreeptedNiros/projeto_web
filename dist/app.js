"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const BreadControllerOfficial_1 = require("./controller/BreadControllerOfficial");
const StockControllerOfficial_1 = require("./controller/StockControllerOfficial");
const SaleControllerOfficial_1 = require("./controller/SaleControllerOfficial");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.get('/api/modalidade/todas', BreadControllerOfficial_1.allBreadsController);
app.get('/api/modalidade/:id', BreadControllerOfficial_1.searchBreadController);
app.post('/api/modalidade/', BreadControllerOfficial_1.addBreadController);
app.put('/api/modalidade/:id', BreadControllerOfficial_1.updateBreadController);
app.delete('/api/modalidade/:id', BreadControllerOfficial_1.deleteBreadController);
app.get('/api/venda/todas', SaleControllerOfficial_1.allSalesController);
app.get('/api/venda/:id', SaleControllerOfficial_1.searchSaleController);
app.post('/api/venda/', SaleControllerOfficial_1.addSaleController);
app.get('/api/estoque/todos', StockControllerOfficial_1.allStocksController);
app.get('/api/estoque/:id', StockControllerOfficial_1.searchStockController);
app.post('/api/estoque/', StockControllerOfficial_1.addStockController);
app.put('/api/estoque/:id', StockControllerOfficial_1.updateStockController);
app.delete('/api/estoque/:id', StockControllerOfficial_1.deleteStockController);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
