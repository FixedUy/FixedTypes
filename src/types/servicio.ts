import {ServiciosPrecios} from "./serviciosPrecios";

interface Servicio {
  version: number;
  id: string;
  codigo: string[];
  nombre: string;
  rubroId: string;
  listaPrecio: {[key: string]: ServiciosPrecios};
  unidad: string;
  activo: boolean;
  campoExtra: {[key: string]: string};
  buscablePor: null | string[];
}

const servicioConverter = {
  toFirestore(servicio: Servicio) {
    return servicio;
  },
  fromFirestore(snapshot: any): Servicio {
    const data = snapshot.data()!;

    return {
      version: data.version,
      id: snapshot.id,
      codigo: data.codigo,
      nombre: data.nombre,
      rubroId: data.rubroId,
      listaPrecio: data.listaPrecio,
      unidad: data.unidad,
      activo: data.activo,
      campoExtra: data.campoExtra,
      buscablePor: null
    };
  }
};

export {type Servicio, servicioConverter};
