interface SaleItem {
    stockId: number;
    quantidade: number;
    name: string;
    salePrice: number;
    breadId: number;
}

export class Sale {
    public id: number;
    public cpf: number;
    public items: SaleItem[];
    public total: number;

    constructor(cpf: number, items: SaleItem[], total: number) {
        this.id = this.geraId();
        this.cpf = cpf;
        this.items = items;
        this.total = total;
    }

    private geraId(): number {
        return Date.now();
    }
}
