"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sale = void 0;
class Sale {
    constructor(cpf, items, total) {
        this.id = this.geraId();
        this.cpf = cpf;
        this.items = items;
        this.total = total;
    }
    geraId() {
        return Date.now();
    }
}
exports.Sale = Sale;
