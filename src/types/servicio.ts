import {ServiciosPrecios} from "./serviciosPrecios";
import {ServiciosRubro} from "./serviciosRubros";

interface Servicio {
  version: number;
  id: string;
  codigo: string[];
  nombre: string;
  rubro: ServiciosRubro | string;
  listaPrecio: {[key: string]: ServiciosPrecios};
  unidad: string;
  activo: boolean;
  campoExtra: {[key: string]: string};
}

const servicioConverter = {
  toFirestore(servicio: Servicio) {
    return {};
  },
  fromFirestore(snapshot: any): Servicio {
    const data = snapshot.data()!;

    return {
      version: data.version,
      id: snapshot.id,
      codigo: data.codigo,
      nombre: data.nombre,
      rubro: data.rubro,
      listaPrecio: data.listaPrecio,
      unidad: data.unidad,
      activo: data.activo,
      campoExtra: data.campoExtra
    };
  }
};

export {type Servicio, servicioConverter};
