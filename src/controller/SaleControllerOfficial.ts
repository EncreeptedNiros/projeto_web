import { Request, Response } from "express";
import { SaleService } from "../service/SaleService";
import { StockService } from "../service/StockService";

const saleService = new SaleService();
const stockService = new StockService();

export function addSaleController(req: Request, res: Response) {
    try {
        const { cpf, items, total } = req.body;
        const toSale = { cpf, items, total }
        const newSale = saleService.addSale(toSale);
        res.status(201).json(
            {
                mensagem: "Produto adicionado com sucesso!",
                pao: newSale
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export function searchSaleController(req: Request, res: Response) {
    try {
        const sale = parseInt(req.params.id);
        const foundSale = saleService.searchSale(sale);
        if (foundSale) {
            res.status(200).json(
                {
                    mensagem: "Produto encontrado com sucesso!",
                    pao: foundSale
                }
            );
        } else {
            res.status(404).json({ mensagem: "Produto não encontrado." });
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};


export function allSalesController(req: Request, res: Response) {
    try {
        res.status(200).json(saleService.allSale(req));
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};