import { RemitoItem } from "./remitoItem";
import { Cliente } from "./cliente";
import { Local } from "./local";
interface Remito {
    version: string;
    id: string;
    fechaComprobante: number;
    fechaComprobanteString: string;
    fechaCreacion: string;
    numero: string;
    localIngresa: Local | null;
    localSale: Local | null;
    entidad: Cliente;
    items: RemitoItem[];
    observaciones: string;
    tipo: RemitoTipo;
    autor: string;
    activo: boolean;
}
export declare enum RemitoTipo {
    Ingreso = "ingreso",
    Salida = "salida",
    Transferencia = "transferencia"
}
declare const remitoConverter: {
    toFirestore(remito: Remito): Remito;
    fromFirestore(snapshot: any): Remito;
};
export { type Remito, remitoConverter };
