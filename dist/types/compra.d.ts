import { Cliente } from "./cliente";
import { LineaCompra } from "./lineaCompra";
interface Compra {
    version: number;
    id: string;
    formaDePago: string;
    fechaComprobante: number;
    fechaCreacionString: string;
    fechaCreacion: number;
    comprobante: string;
    proveedor: Cliente;
    moneda: string;
    descuentoGeneral: number;
    lineaCompra: LineaCompra[];
    tipo: string;
    subtotal: number;
    montoIVA: number;
    total: number;
    saldo: number;
    activo: boolean;
}
declare const CompraConverter: {
    toFirestore(compra: Compra): {};
    fromFirestore(snapshot: any): Compra;
};
export { type Compra, CompraConverter };
