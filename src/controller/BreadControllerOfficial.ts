import { Request, Response } from "express";
import { BreadService } from "../service/BreadService";

const breadService = new BreadService();

export function addBreadController(req: Request, res: Response) {
    try {
        const newBread = breadService.addBread(req.body);
        res.status(201).json(
            {
                mensagem: "Produto adicionado com sucesso!",
                pao: newBread
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export function searchBreadController(req: Request, res: Response) {
    try {
        const bread = parseInt(req.params.id);
        const foundBread = breadService.searchBread(bread, req);
        if (foundBread) {
            res.status(200).json(
                {
                    mensagem: "Produto encontrado com sucesso!",
                    pao: foundBread
                }
            );
        } else {
            res.status(404).json({ mensagem: "Produto não encontrado." });
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};


export function allBreadsController(req: Request, res: Response) {
    try {
        res.status(200).json(breadService.allBread(req.query.ordem));
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};


export function deleteBreadController(req: Request, res: Response) {
    try {
        breadService.deleteBread(req.params.id);
        res.status(200).json({ message: "Produto deletado com sucesso!" });
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
};


export function updateBreadController(req: Request, res: Response) {
    try {
        const { name, vegan } = req.body;
        const id = parseInt(req.params.id);
        const updatedBread = { id, name, vegan };
        //updateBread(id, updatedBread);

        const newBread = breadService.updateBread(updatedBread);

        res.status(201).json(
            {
                mensagem: "Produto atualizado com sucesso!",
                bread: updatedBread
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};