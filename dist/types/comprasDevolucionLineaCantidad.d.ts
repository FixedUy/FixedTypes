interface ComprasDevolucionLineaCantidad {
    cantidadPendiente: number;
    cantidadDevolver: number;
    descripcion: string;
    rubro: string;
    centroCosto: string;
    tasaIva: string;
    montoBruto: number;
    precio: number;
    importe: number;
    stock: boolean;
    idProducto: string;
    nroLinea: number;
}
declare const ComprasDevolucionLineaCantidadConverter: {
    toFirestore(comprasDevolucionLineaCantidad: ComprasDevolucionLineaCantidad): ComprasDevolucionLineaCantidad;
    fromFirestore(snapshot: any): ComprasDevolucionLineaCantidad;
};
export { type ComprasDevolucionLineaCantidad, ComprasDevolucionLineaCantidadConverter };
