interface StockLote {
    version: number;
    id: string;
    cantidadActual: number;
    cantidadOriginal: number;
    costo: number;
    cotizacion: number;
    documentoCreador: string;
    documentoCreadorId: string;
    fechaCreacion: number;
    fechaCreacionString: string;
    localId: string;
    moneda: string;
    tasaIVA: string;
    tieneStock: boolean;
    usuario: string;
}
declare const stockLoteConverter: {
    toFirestore(stockLote: StockLote): StockLote;
    fromFirestore(snapshot: any): StockLote;
};
export { type StockLote, stockLoteConverter };
