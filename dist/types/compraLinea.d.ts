interface CompraLinea {
    cantidad: number;
    descripcion: string;
    rubro: string;
    centroCosto: string;
    tasaIva: string;
    montoBruto: number;
    descuentoMonto: number;
    descuentoPorcentaje: number;
    precio: number;
    importe: number;
    stock: boolean;
    idProducto: string;
}
declare const CompraLineaConverter: {
    toFirestore(linea: CompraLinea): CompraLinea;
    fromFirestore(snapshot: any): CompraLinea;
};
export { type CompraLinea, CompraLineaConverter };
