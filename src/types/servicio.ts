import {ServiciosPrecios} from "./serviciosPrecios";

interface Servicio {
  version: number;
  id: string;
  codigo: {[key: string]: string};
  todosLosCodigos: string[];
  nombre: string;
  rubroId: string;
  listaPrecio: {[key: string]: ServiciosPrecios};
  unidad: string;
  activo: boolean;
  campoExtra: {[key: string]: string};
  buscablePor: null | string[];
  cantidadDecimales: number;
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
      todosLosCodigos: data.todosLosCodigos,
      nombre: data.nombre,
      rubroId: data.rubroId,
      listaPrecio: data.listaPrecio,
      unidad: data.unidad,
      activo: data.activo,
      campoExtra: data.campoExtra,
      buscablePor: null,
      cantidadDecimales: data.cantidadDecimales
    };
  }
};

export {type Servicio, servicioConverter};
