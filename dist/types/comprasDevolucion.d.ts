import { CompraLinea } from "./compraLinea";
import { ComprasFacturasDevueltaCantidad } from "./comprasFacturasDevueltaCantidad";
import { ComprasFacturasDevueltaImporte } from "./comprasFacturasDevueltaImporte";
import { Proveedor } from "./proveedor";
interface CompraDevolucion {
    version: number;
    id: string;
    formaDePago: string;
    fechaComprobante: number;
    fechaComprobanteString: string;
    fechaCreacion: number;
    comprobante: string;
    serie: string;
    numero: number;
    proveedor: Proveedor;
    moneda: string;
    descuentoGeneral: number;
    compraLinea: CompraLinea[];
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
    detalleDevolucion: ComprasFacturasDevueltaCantidad[];
    detalleDevolucionImporte: ComprasFacturasDevueltaImporte[];
    cotizacion: number;
}
declare const CompraDevolucionConverter: {
    toFirestore(compraDevolucion: CompraDevolucion): CompraDevolucion;
    fromFirestore(snapshot: any): CompraDevolucion;
};
export { type CompraDevolucion, CompraDevolucionConverter };
