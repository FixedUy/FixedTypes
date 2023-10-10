interface VentasDevolucionLineaCantidad {
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
declare const VentasDevolucionLineaCantidadConverter: {
    toFirestore(ventasDevolucionLineaCantidad: VentasDevolucionLineaCantidad): VentasDevolucionLineaCantidad;
    fromFirestore(snapshot: any): VentasDevolucionLineaCantidad;
};
export { type VentasDevolucionLineaCantidad, VentasDevolucionLineaCantidadConverter };
