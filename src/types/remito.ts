import {RemitoItem} from "./remitoItem";
import {Cliente} from "./cliente";
import {Local} from "./local";
export interface Remito {
  id: string;
  fecha: string | number;
  fechaString: string;
  numero: string;
  localIngresa: Local | null;
  localSale: Local | null;
  entidad: Cliente;
  items: RemitoItem[];
  observaciones: string;
  tipo: RemitoTipo;
}

export enum RemitoTipo {
  Ingreso = "ingreso",
  Salida = "salida",
  Transferencia = "transferencia"
}
