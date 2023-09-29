interface ItemStock {
    cantidadModificar: number;
    id: string;
}
export interface StockModificar {
    operacion: string;
    items: ItemStock[];
    conSeriales: boolean;
    idLocal: string;
}
export {};
