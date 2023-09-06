interface Cotizacion {
    codigoBcu: string;
    cotizacion: number;
}
declare const cotizacionConverter: {
    toFirestore(cotizacion: Cotizacion): Cotizacion;
    fromFirestore(snapshot: any): Cotizacion;
};
export { type Cotizacion, cotizacionConverter };
