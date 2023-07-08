import {isArray} from "lodash";

interface ServiciosListasPrecio {
  version: number;
  id: string;
  nombre: string;
  locales: string[];
  clonarId: string;
  activo: boolean;
  ultimaEdicion: number;
}

const serviciosListasPrecioConverter = {
  toFirestore(servicioListaPrecio: ServiciosListasPrecio) {
    return {};
  },
  fromFirestore(snapshot: any): ServiciosListasPrecio {
    const data = snapshot.data()!;

    const locales: string[] = [];
    if (
      data.locales != undefined &&
      data.locales != null &&
      isArray(data.locales)
    ) {
      data.locales.map(e => {
        locales.push(e);
      });
    }

    return {
      version: data.version,
      id: snapshot.id,
      nombre: data.nombre,
      locales: locales,
      clonarId: data.clonarId,
      activo: data.activo,
      ultimaEdicion: data.ultimaEdicion
    };
  }
};

export {type ServiciosListasPrecio, serviciosListasPrecioConverter};
