import {
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
  WithFieldValue
} from "firebase/firestore";
import { isArray } from "lodash";

class Unidad {
  version: number;
  id: string;
  nombre: string;
  activo: boolean;
  ultimaEdicion: number;

  constructor(
    version: number,
    id: string,
    nombre: string,
    activo: boolean,
    ultimaEdicion: number
  ) {
    this.version = version;
    this.id = id;
    this.nombre = nombre;
    this.activo = activo;
    this.ultimaEdicion = ultimaEdicion;
  }
}

const UnidadConverter = {
  toFirestore(unidad: Unidad): DocumentData {
    return {};
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): Unidad {
    const data = snapshot.data(options)!;
    return new Unidad(
      data.version,
      snapshot.id,
      data.nombre,
      data.activo,
      data.ultimaEdicion
    );
  }
};
export { Unidad, UnidadConverter };
