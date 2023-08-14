import { RemitoItem } from "./remitoItem";
import { Cliente } from "./cliente";
interface Remito {
    version: number;
    id: string;
    fechaComprobante: number;
    fechaComprobanteString: string;
    fechaCreacion: number;
    numero: string;
    localIngresa: string | null;
    localSale: string | null;
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
declare const RemitoConverter: {
    toFirestore(remito: Remito): Remito;
    fromFirestore(snapshot: any): Remito;
};
export { type Remito, RemitoConverter };
