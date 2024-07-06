"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreadService = void 0;
const Bread_1 = require("../models/Bread");
const BreadRepository_1 = require("../repository/BreadRepository");
class BreadService {
    constructor() {
        this.breadRepository = new BreadRepository_1.BreadRepository;
    }
    addBread(breadData) {
        const { name, vegan } = breadData;
        if (!breadData) {
            throw new Error("Informações incompletas");
        }
        const foundBread = this.searchBread(undefined, name);
        if (foundBread) {
            throw new Error("Produto já cadastrado!!!");
        }
        const newBread = new Bread_1.Bread(name, vegan);
        this.breadRepository.addBread(newBread);
        return newBread;
    }
    searchBread(id, name) {
        if (id) {
            console.log("Com ID");
            const idNumber = parseInt(id, 10);
            return this.breadRepository.breadById(idNumber);
        }
        else if (name) {
            console.log("Name");
            return this.breadRepository.breadByName(name);
        }
        console.log(id);
        return undefined;
    }
    allBread(ordem) {
        if (ordem === "desc") {
            return this.breadRepository.allBreads();
        }
        return this.breadRepository.allBreads();
    }
    deleteBread(id) {
        const bread = this.searchBread(id, undefined);
        if (!bread) {
            throw new Error("Produto não encontrado");
        }
        this.breadRepository.deleteBread(bread);
    }
    updateBread(breadData) {
        const bread = this.searchBread(breadData.id, undefined);
        if (!bread) {
            throw new Error("Produto não encontrado");
        }
        this.breadRepository.updateBreadRepository(breadData.id, breadData);
        /*
                const { id, name, vegan } = breadData;
                if (!name || vegan != true || vegan != false) {
                    throw new Error("Informações incompletas");
                }
        
                let foundBread = this.breadRepository.breadById(id);
                if (!foundBread) {
                    throw new Error("Produto não cadastrado!!!");
                }
                foundBread.name = name;
                foundBread.vegan = vegan;
                this.breadRepository.updateBreadRepository(id, foundBread);
                return foundBread;
                */
    }
}
exports.BreadService = BreadService;
