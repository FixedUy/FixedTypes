interface ProductoSeriales {
    version: number;
    id: string;
    productoId: string;
    serial: string;
    localActual: string;
    fechaIngreso: number;
    fechaIngresoString: string;
    fechaSalida: number;
    fechaSalidaString: string;
    loteId: string;
}
declare const productoConverter: {
    toFirestore(producto: ProductoSeriales): ProductoSeriales;
    fromFirestore(snapshot: any): ProductoSeriales;
};
export { type ProductoSeriales, productoConverter };
