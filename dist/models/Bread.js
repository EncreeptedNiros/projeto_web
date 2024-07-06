"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bread = void 0;
class Bread {
    constructor(name, vegan) {
        this.name = name;
        this.vegan = vegan;
        this.id = this.geraId();
    }
    geraId() {
        return Date.now();
    }
}
exports.Bread = Bread;
