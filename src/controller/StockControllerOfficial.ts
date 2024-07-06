import { Request, Response } from "express";
import { StockService } from "../service/StockService";

const stockService = new StockService();

export function addStockController(req: Request, res: Response) {
    try {
        const { breadId, quantity, salePrice } = req.body;
        const toStock = { breadId, quantity, salePrice }
        console.log(toStock);
        const newStock = stockService.addStock(toStock);
        res.status(201).json(
            {
                mensagem: "Produto adicionado com sucesso!",
                pao: newStock
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export function searchStockController(req: Request, res: Response) {
    try {
        const bread = parseInt(req.params.id);
        const foundStock = stockService.searchStock(bread);
        if (foundStock) {
            res.status(200).json(
                {
                    mensagem: "Produto encontrado com sucesso!",
                    pao: foundStock
                }
            );
        } else {
            res.status(404).json({ mensagem: "Produto não encontrado." });
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};


export function allStocksController(req: Request, res: Response) {
    try {
        res.status(200).json(stockService.allStock(req));
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};


export function deleteStockController(req: Request, res: Response) {
    try {
        stockService.deleteStock(req.params.id);
        res.status(200).json({ message: "Produto deletado com sucesso!" });
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
}

export function updateStockController(req: Request, res: Response) {
    try {
        const { breadId, quantity, salePrice } = req.body;
        const id = parseInt(req.params.id);
        const updatedStock = { breadId, quantity, salePrice };

        const newStock = stockService.updateStock(id, updatedStock);

        res.status(201).json(
            {
                mensagem: "Produto atualizado com sucesso!",
                bread: updatedStock
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};