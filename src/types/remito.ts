import {RemitoItem} from "./remitoItem";
import {Cliente} from "./cliente";
import {Local} from "./local";

interface Remito {
  id: string;
  fecha: number;
  fechaString: string;
  numero: string;
  localIngresa: Local | null;
  localSale: Local | null;
  entidad: Cliente /* TO-DO: add | Proveedor*/;
  items: RemitoItem[];
  observaciones: string;
  tipo: Tipo;
}

enum Tipo {
  Ingreso = "ingreso",
  Salida = "salida",
  Transferencia = "transferencia"
}

export {type Remito};
