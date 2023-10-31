import {ProductosListasPrecio} from "./productosListasPrecio";

interface ListasDePreciosAEditar {
  listas: ProductosListasPrecio[];
  rubros: string[];
  afectacion: string;
  conIva: boolean;
  moneda: string[];
  redondeo: number;
  monto: number;
  tipo: string;
}

export {type ListasDePreciosAEditar};
