interface Unidad {
  version: number;
  id: string;
  nombre: string;
  activo: boolean;
  ultimaEdicion: number;
}

const UnidadConverter = {
  toFirestore(unidad: Unidad) {
    return unidad;
  },
  fromFirestore(snapshot: any): Unidad {
    const data = snapshot.data()!;

    return {
      version: data.version,
      id: snapshot.id,
      nombre: data.nombre,
      activo: data.activo,
      ultimaEdicion: data.ultimaEdicion
    };
  }
};
export {type Unidad, UnidadConverter};
