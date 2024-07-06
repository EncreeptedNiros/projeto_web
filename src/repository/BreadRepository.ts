import { Bread } from "../models/Bread";

export class BreadRepository {
    breadList: Bread[] = [];
    addBread(bread: Bread) {
        this.breadList.push(bread);
    }

    breadById(id: number): Bread | undefined {
        return this.breadList.find(bread => bread.id === id);
    }

    breadByName(name: string): Bread | undefined {
        return this.breadList.find(bread => bread.name === name);
    }

    allBreads(): Bread[] {
        return this.breadList;
    }

    deleteBread(produto: Bread) {
        const index = this.breadList.indexOf(produto);
        if (index !== -1) {
            this.breadList.splice(index, 1);
        }
    }

    updateBreadRepository(id: number, produto: Bread): void {
        const index = this.breadList.findIndex(s => s.id === id);
        console.log(index);
        if (index !== -1) this.breadList[index] = produto;
    }

}