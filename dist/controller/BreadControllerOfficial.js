"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBreadController = exports.deleteBreadController = exports.allBreadsController = exports.searchBreadController = exports.addBreadController = void 0;
const BreadService_1 = require("../service/BreadService");
const breadService = new BreadService_1.BreadService();
function addBreadController(req, res) {
    try {
        const newBread = breadService.addBread(req.body);
        res.status(201).json({
            mensagem: "Produto adicionado com sucesso!",
            pao: newBread
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.addBreadController = addBreadController;
;
function searchBreadController(req, res) {
    try {
        const bread = parseInt(req.params.id);
        const foundBread = breadService.searchBread(bread, req);
        if (foundBread) {
            res.status(200).json({
                mensagem: "Produto encontrado com sucesso!",
                pao: foundBread
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
exports.searchBreadController = searchBreadController;
;
function allBreadsController(req, res) {
    try {
        res.status(200).json(breadService.allBread(req.query.ordem));
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.allBreadsController = allBreadsController;
;
function deleteBreadController(req, res) {
    try {
        breadService.deleteBread(req.params.id);
        res.status(200).json({ message: "Produto deletado com sucesso!" });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.deleteBreadController = deleteBreadController;
;
function updateBreadController(req, res) {
    try {
        const { name, vegan } = req.body;
        const id = parseInt(req.params.id);
        const updatedBread = { id, name, vegan };
        //updateBread(id, updatedBread);
        const newBread = breadService.updateBread(updatedBread);
        res.status(201).json({
            mensagem: "Produto atualizado com sucesso!",
            bread: updatedBread
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.updateBreadController = updateBreadController;
;
