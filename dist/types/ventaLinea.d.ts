interface VentaLinea {
    cantidad: number;
    descripcion: string;
    descripcionLarga: string;
    rubro: string;
    centroCosto: string;
    tasaIva: string;
    montoBruto: 0 | 1 | 2 | 3;
    descuentoMonto: number;
    tipo: "manual" | "servicio" | "producto" | "remito";
    descuentoPorcentaje: number;
    precio: number;
    importe: number;
    stock: boolean;
    idProducto: string;
    idServicio: string;
    listaPrecio: string;
    retenciones: VentaRetencion[];
}
declare const VentaLineaConverter: {
    toFirestore(linea: VentaLinea): VentaLinea;
    fromFirestore(snapshot: any): VentaLinea;
};
interface VentaRetencion {
    codigo: number;
    tasa: number;
    valor: number;
}
export { type VentaRetencion, type VentaLinea, VentaLineaConverter };
