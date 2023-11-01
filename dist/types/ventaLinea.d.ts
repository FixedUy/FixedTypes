interface VentaLinea {
    cantidad: number;
    descripcion: string;
    descripcionLarga: string;
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
    idServicio: string;
    listaPrecio: string;
}
declare const VentaLineaConverter: {
    toFirestore(linea: VentaLinea): VentaLinea;
    fromFirestore(snapshot: any): VentaLinea;
};
export { type VentaLinea, VentaLineaConverter };
