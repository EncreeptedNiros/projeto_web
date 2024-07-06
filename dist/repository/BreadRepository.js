"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreadRepository = void 0;
class BreadRepository {
    constructor() {
        this.breadList = [];
    }
    addBread(bread) {
        this.breadList.push(bread);
    }
    breadById(id) {
        return this.breadList.find(bread => bread.id === id);
    }
    breadByName(name) {
        return this.breadList.find(bread => bread.name === name);
    }
    allBreads() {
        return this.breadList;
    }
    deleteBread(produto) {
        const index = this.breadList.indexOf(produto);
        if (index !== -1) {
            this.breadList.splice(index, 1);
        }
    }
    updateBreadRepository(id, produto) {
        const index = this.breadList.findIndex(s => s.id === id);
        console.log(index);
        if (index !== -1)
            this.breadList[index] = produto;
    }
}
exports.BreadRepository = BreadRepository;
