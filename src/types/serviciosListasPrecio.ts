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
    return servicioListaPrecio;
  },
  fromFirestore(snapshot: any): ServiciosListasPrecio {
    const data = snapshot.data()!;

    return {
      version: data.version,
      id: snapshot.id,
      nombre: data.nombre,
      locales: data.locales,
      clonarId: data.clonarId,
      activo: data.activo,
      ultimaEdicion: data.ultimaEdicion
    };
  }
};

export {type ServiciosListasPrecio, serviciosListasPrecioConverter};
