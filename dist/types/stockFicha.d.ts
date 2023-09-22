interface StockFichaLotes {
    loteId: string;
    cantidadQuitada: number;
    costo: number;
    moneda: string;
    cotizacion: number;
}
interface StockFicha {
    id: string;
    version: number;
    esIngreso: boolean;
    fecha: number;
    cantidad: number;
    lotesQuitados: StockFichaLotes[];
    usuarioId: string;
    documentoCreador: string;
    documentoCreadorId: string;
    localId: string;
}
declare const stockFichaConverter: {
    toFirestore(stockFicha: StockFicha): StockFicha;
    fromFirestore(snapshot: any): StockFicha;
};
export { type StockFicha, stockFichaConverter, type StockFichaLotes };
