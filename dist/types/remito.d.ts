import { RemitoItem } from "./remitoItem";
interface Remito {
    version: number;
    id: string;
    fechaComprobante: number;
    fechaComprobanteString: string;
    fechaCreacion: number;
    comprobante: string;
    numero: number;
    localIngresa: string | null;
    localSale: string | null;
    entidadId: string;
    entidadNombre: string;
    items: RemitoItem[];
    observaciones: string;
    tipo: RemitoTipo;
    autor: string;
    activo: boolean;
    cfe?: string;
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
