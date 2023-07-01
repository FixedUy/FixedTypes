/* eslint-disable arrow-parens */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable require-jsdoc */
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
  toFirestore(unidad: Unidad) {
    return {};
  },
  fromFirestore(snapshot: any): Unidad {
    const data = snapshot.data()!;
    return new Unidad(
      data.version,
      snapshot.id,
      data.nombre,
      data.activo,
      data.ultimaEdicion
    );
  }
};
export {Unidad, UnidadConverter};
