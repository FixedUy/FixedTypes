import {Producto} from "../producto";
import {Servicio} from "../servicio";

export interface RemitoAgregar {
  version: string;
  fecha: number;
  fechaString: string;
  entidadId: string;
  entidadNombre: string;
  observaciones: string;
  tipo: string;
  localIngresa: string | null;
  localSale: string | null;
  productos: {item: Producto; cantidad: number}[] | null;
  servicios: {item: Servicio; cantidad: number}[] | null;
}
