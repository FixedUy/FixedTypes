import { Cliente } from "./cliente";
import { VentaLinea } from "./ventaLinea";
interface Venta {
    version: number;
    id: string;
    formaDePago: string;
    fechaComprobante: number;
    fechaComprobanteString: string;
    fechaCreacion: number;
    comprobante: string;
    serie: string;
    numero: number;
    cliente: Cliente;
    moneda: string;
    ventaLinea: VentaLinea[];
    descuentoGeneral: number;
    subtotal: number;
    montoIVA: number;
    redondeo: number;
    total: number;
    saldo: number;
    activo: boolean;
    observaciones: string;
    esDeExportacion: boolean;
    clausulaVenta: string;
    modalidadVenta: string;
    viaTransporte: string;
    usuario: string;
    local: string;
    listasPreciosServicios: string;
    listasPreciosProductos: string;
    buscablePor: null | string[];
    cotizacion: number;
    productos: [];
    tipo: string;
    esDeReintegro: boolean;
    periodoDesdeHasta: string;
    ordenCompra: string;
    listaFormaDePago: string;
    fechaVencimiento: string;
    infoAdicional: string;
    lineasVentaEditar: string;
    combinadoImpresion: string;
}
declare const VentaConverter: {
    toFirestore(venta: Venta): Venta;
    fromFirestore(snapshot: any): Venta;
};
export { type Venta, VentaConverter };
