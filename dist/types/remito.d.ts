import { RemitoItem } from "./remitoItem";
import { Cliente } from "./cliente";
import { Local } from "./local";
interface Remito {
    id: string;
    fecha: number;
    fechaString: string;
    numero: string;
    localIngresa: Local | null;
    localSale: Local | null;
    entidad: Cliente;
    items: RemitoItem[];
    observaciones: string;
    tipo: Tipo;
}
declare enum Tipo {
    Ingreso = "ingreso",
    Salida = "salida",
    Transferencia = "transferencia"
}
export { type Remito };
