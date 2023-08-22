import { Cliente } from "./cliente";
import { CompraLinea } from "./compraLinea";
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
    compraLinea: CompraLinea[];
    descuentoGeneral: number;
    subtotal: number;
    montoIVA: number;
    total: number;
    saldo: number;
    activo: boolean;
    observaciones: string;
    usuario: string;
    local: string;
}
declare const VentaConverter: {
    toFirestore(venta: Venta): Venta;
    fromFirestore(snapshot: any): Venta;
};
export { type Venta, VentaConverter };
