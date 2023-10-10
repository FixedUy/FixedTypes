import { Cliente } from "./cliente";
import { VentaLinea } from "./ventaLinea";
import { VentasFacturasDevueltaCantidad } from "./ventasFacturasDevueltaCantidad";
import { VentasFacturasDevueltaImporte } from "./ventasFacturasDevueltaImporte";
interface VentaDevolucion {
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
    descuentoGeneral: number;
    ventaLinea: VentaLinea[];
    tipo: string;
    subtotal: number;
    montoIVA: number;
    total: number;
    saldo: number;
    activo: boolean;
    observaciones: string;
    usuario: string;
    local: string;
    buscablePor: null | string[];
    productos: string[];
    tipoDevolucion: string;
    detalleDevolucion: VentasFacturasDevueltaCantidad[];
    detalleDevolucionImporte: VentasFacturasDevueltaImporte[];
    cotizacion: number;
}
declare const VentaDevolucionConverter: {
    toFirestore(ventaDevolucion: VentaDevolucion): VentaDevolucion;
    fromFirestore(snapshot: any): VentaDevolucion;
};
export { type VentaDevolucion, VentaDevolucionConverter };
