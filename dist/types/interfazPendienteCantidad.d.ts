interface InterfazPendienteCantidad {
    version: number;
    cantidadOriginal: number;
    cantidadActual: number;
    nroLinea: number;
    tipo: "producto" | "servicio" | "manual";
    productoId: string;
    servicioId: string;
    descripcion: string;
    precioUnitario: number;
    importe: number;
    tasaIVA: string;
}
declare const InterfazPendienteCantidadoConverter: {
    toFirestore(interfazPendienteCantidad: InterfazPendienteCantidad): InterfazPendienteCantidad;
    fromFirestore(snapshot: any): InterfazPendienteCantidad;
};
export { type InterfazPendienteCantidad, InterfazPendienteCantidadoConverter };
