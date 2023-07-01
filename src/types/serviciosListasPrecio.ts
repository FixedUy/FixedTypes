import { Local } from "./local";
import { isArray } from "lodash";

class ServiciosListasPrecio {
  version: number;
  id: string;
  nombre: string;
  locales: string[];
  clonarId: string;
  activo: boolean;
  ultimaEdicion: number;

  constructor(
    version: number,
    id: string,
    nombre: string,
    locales: string[],
    clonarId: string,
    activo: boolean,
    ultimaEdicion: number
  ) {
    this.version = version;
    this.id = id;
    this.nombre = nombre;
    this.locales = locales;
    this.clonarId = clonarId;
    this.activo = activo;
    this.ultimaEdicion = ultimaEdicion;
  }
}

const ServiciosListasPrecioConverter = {
  toFirestore(servicioListaPrecio: ServiciosListasPrecio) {
    return {};
  },
  fromFirestore(snapshot): ServiciosListasPrecio {
    const data = snapshot.data()!;

    const locales: string[] = [];
    if (
      data.locales != undefined &&
      data.locales != null &&
      isArray(data.locales)
    ) {
      data.locales.map((e) => {
        locales.push(e);
      });
    }

    return new ServiciosListasPrecio(
      data.version,
      snapshot.id,
      data.nombre,
      locales,
      data.clonarId,
      data.activo,
      data.ultimaEdicion
    );
  },
};

export { ServiciosListasPrecio, ServiciosListasPrecioConverter };
