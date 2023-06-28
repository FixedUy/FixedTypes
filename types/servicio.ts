import {
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
  WithFieldValue,
} from "firebase/firestore";
import { isArray } from "lodash";
import { ServiciosPrecios } from "./ServiciosPrecios";
import { ServiciosRubro } from "./ServiciosRubros";

class Servicio {
  version: number;
  id: string;
  codigo: string[];
  nombre: string;
  rubro: ServiciosRubro | string;
  listaPrecio: { [key: string]: ServiciosPrecios };
  unidad: string;
  activo: boolean;
  // buscablePor: string[];

  constructor(
    version: number,
    id: string,
    codigo: string[],
    nombre: string,
    rubro: ServiciosRubro | string,
    listaPrecio: { [key: string]: ServiciosPrecios },
    unidad: string,
    activo: boolean
    // buscablePor: string[],
  ) {
    this.version = version;
    this.id = id;
    this.codigo = codigo;
    this.nombre = nombre;
    this.rubro = rubro;
    this.listaPrecio = listaPrecio;
    this.unidad = unidad;
    this.activo = activo;
    // this.buscablePor = buscablePor;
  }
}

const ServicioConverter = {
  toFirestore(servicio: Servicio): DocumentData {
    return {};
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): Servicio {
    const data = snapshot.data(options)!;
    const listaPrecio: { [key: string]: ServiciosPrecios } = {};
    if (
      data.listaPrecio != undefined &&
      data.listaPrecio != null &&
      isArray(data.listaPrecio)
    ) {
      data.listaPrecio.map((e) => {
        listaPrecio[e["id"]] = new ServiciosPrecios(
          e["id"],
          e["nombre"],
          e["tasa"],
          e["precioSinIva"],
          e["precioConIva"],
          e["moneda"],
          e["precioArbitrario"]
        );
      });
    }

    return new Servicio(
      data.version,
      snapshot.id,
      data.codigo,
      data.nombre,
      data.rubro,
      listaPrecio,
      data.unidad,
      data.activo
      // data.buscablePor,
    );
  },
};

export { Servicio, ServicioConverter };
