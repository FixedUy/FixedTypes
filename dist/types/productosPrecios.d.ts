interface ProductosPrecios {
    idLista: string;
    tasa: string;
    precioSinIva: number;
    precioConIva: number;
    moneda: string;
    precioArbitrario: boolean;
}
declare const productosPreciosConverter: {
    toFirestore(lista: ProductosPrecios): {
        idLista: string;
        tasa: string;
        precioSinIva: number;
        precioConIva: number;
        moneda: string;
        precioArbitrario: boolean;
    };
    fromFirestore(snapshot: any): ProductosPrecios;
};
export { type ProductosPrecios, productosPreciosConverter };
