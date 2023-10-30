import {ProductosListasPrecio} from "./productosListasPrecio";

interface ListasDePreciosAEditar {
  listas: ProductosListasPrecio[];
  rubros: never[];
  afectacion: string;
  conIva: boolean;
  moneda: never[];
  redondeo: number;
  monto: number;
  tipo: string;
}

export {type ListasDePreciosAEditar};
