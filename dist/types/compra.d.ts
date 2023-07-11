import { Cliente } from "./cliente";
import { LineaCompra } from "./lineaCompra";
import { Moneda } from "./moneda";
interface Compra {
    version: number;
    id: string;
    formaDePago: string;
    fechaNumero: number;
    fechaString: string;
    comprobante: string;
    proveedor: Cliente;
    moneda: string | Moneda;
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
