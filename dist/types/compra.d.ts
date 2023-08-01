import { Cliente } from "./cliente";
import { CompraLinea } from "./compraLinea";
interface Compra {
    version: number;
    id: string;
    formaDePago: string;
    fechaComprobante: number;
    fechaComprobanteString: string;
    fechaCreacion: number;
    comprobante: string;
    serie: string;
    numero: number;
    proveedor: Cliente;
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
}
declare const CompraConverter: {
    toFirestore(compra: Compra): {};
    fromFirestore(snapshot: any): Compra;
};
export { type Compra, CompraConverter };
