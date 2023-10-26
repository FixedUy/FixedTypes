import { Cliente } from "./cliente";
import { FacturasAfectadas } from "./proveedoresRecibos";
interface ClientesRecibos {
    version: number;
    id: string;
    fechaComprobante: number;
    fechaComprobanteString: string;
    fechaCreacion: number;
    comprobante: string;
    serie: string;
    numero: number;
    cliente: Cliente;
    moneda: string;
    facturasAfectadas: FacturasAfectadas[];
    tipo: string;
    montoIVA: number;
    total: number;
    saldo: number;
    activo: boolean;
    observaciones: string;
    usuario: string;
    local: string;
}
declare const ClientesRecibosConverter: {
    toFirestore(recibo: ClientesRecibos): ClientesRecibos;
    fromFirestore(snapshot: any): ClientesRecibos;
};
export { type ClientesRecibos, ClientesRecibosConverter };
