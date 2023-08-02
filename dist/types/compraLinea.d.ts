interface CompraLinea {
    cantidad: number;
    descripcion: string;
    rubro: string;
    tasaIva: string;
    descuentoMontoSinIVA: number;
    descuentoMontoConIVA: number;
    descuentoPorcentaje: number;
    precioSinIva: number;
    precioConIva: number;
    importeSinIVA: number;
    importeConIVA: number;
    stock: boolean;
    idProducto: string;
}
declare const CompraLineaConverter: {
    toFirestore(linea: CompraLinea): {};
    fromFirestore(snapshot: any): CompraLinea;
};
export { type CompraLinea, CompraLineaConverter };
