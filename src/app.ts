import express from 'express';
import { addBreadController, searchBreadController, allBreadsController, deleteBreadController, updateBreadController } from "./controller/BreadControllerOfficial";
import { addStockController, searchStockController, allStocksController, deleteStockController, updateStockController } from './controller/StockControllerOfficial';
import { allSalesController, searchSaleController, addSaleController } from './controller/SaleControllerOfficial';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/modalidade/todas', allBreadsController);
app.get('/api/modalidade/:id', searchBreadController);
app.post('/api/modalidade/', addBreadController);
app.put('/api/modalidade/:id', updateBreadController);
app.delete('/api/modalidade/:id', deleteBreadController);

app.get('/api/venda/todas', allSalesController);
app.get('/api/venda/:id', searchSaleController);
app.post('/api/venda/', addSaleController);

app.get('/api/estoque/todos', allStocksController);
app.get('/api/estoque/:id', searchStockController);
app.post('/api/estoque/', addStockController);
app.put('/api/estoque/:id', updateStockController);
app.delete('/api/estoque/:id', deleteStockController);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
