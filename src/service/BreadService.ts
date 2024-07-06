import { Bread } from "../models/Bread";
import { BreadRepository } from "../repository/BreadRepository"

export class BreadService {

    breadRepository: BreadRepository = new BreadRepository;

    addBread(breadData: any): Bread {
        const { name, vegan, price } = breadData;
        if (!breadData) {
            throw new Error("Informações incompletas");
        }

        const foundBread = this.searchBread(undefined, name);
        if (foundBread) {
            throw new Error("Produto já cadastrado!!!");
        }
        const newBread = new Bread(name, vegan, price);
        this.breadRepository.addBread(newBread);
        return newBread;
    }

    searchBread(id: any, name: any): Bread | undefined {
        if (id) {
            console.log("Com ID");
            const idNumber: number = parseInt(id, 10);
            return this.breadRepository.breadById(idNumber);

        } else if (name) {
            console.log("Name");
            return this.breadRepository.breadByName(name);
        }

        console.log(id)
        return undefined;
    }

    allBread(ordem: any): Bread[] {
        if (ordem === "desc") {
            return this.breadRepository.allBreads();
        }
        return this.breadRepository.allBreads();
    }

    deleteBread(id: any) {
        const bread = this.searchBread(id, undefined);
        if (!bread) {
            throw new Error("Produto não encontrado");
        }

        this.breadRepository.deleteBread(bread);
    }

    updateBread(breadData: any): void {
        const bread = this.searchBread(breadData.id, undefined);
        if (!bread) {
            throw new Error("Produto não encontrado");
        }

        this.breadRepository.updateBreadRepository(breadData.id, breadData);
    }
}