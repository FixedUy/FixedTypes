import { Cliente } from "./cliente";
import { LineaCompra } from "./lineaCompra";
interface Compra {
    version: number;
    id: string;
    fechaNumero: number;
    fechaString: string;
    comprobante: string;
    cliente: Cliente;
    tipo: string;
    lineaCompra: LineaCompra[];
    total: number;
    saldo: number;
    activo: boolean;
}
declare const CompraConverter: {
    toFirestore(compra: Compra): {};
    fromFirestore(snapshot: any): Compra;
};
export { type Compra, CompraConverter };
