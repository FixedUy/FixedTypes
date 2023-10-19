import { Proveedor } from "./proveedor";
interface FacturasAfectadas {
    id: string;
    idDocumento: string;
    descripcion: string;
    importe: number;
    saldoOriginal: number;
    saldo: number;
    nroLinea: number;
}
interface ProveedoresRecibos {
    version: number;
    id: string;
    fechaComprobante: number;
    fechaComprobanteString: string;
    fechaCreacion: number;
    comprobante: string;
    serie: string;
    numero: number;
    proveedor: Proveedor;
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
declare const ProveedoresRecibosConverter: {
    toFirestore(compra: ProveedoresRecibos): ProveedoresRecibos;
    fromFirestore(snapshot: any): ProveedoresRecibos;
};
export { type ProveedoresRecibos, ProveedoresRecibosConverter };
export type { FacturasAfectadas };
