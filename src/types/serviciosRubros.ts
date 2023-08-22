interface ServiciosRubro {
  version: number;
  id: string;
  codigo: string;
  nombre: string;
  padreId: string | null;
  nombreCompleto: string;
  activo: boolean;
  esHoja: boolean;
  ultimaEdicion: number;
}

const serviciosRubroConverter = {
  toFirestore(servicioRubros: ServiciosRubro) {
    return servicioRubros;
  },
  fromFirestore(snapshot: any): ServiciosRubro {
    const data = snapshot.data()!;
    return {
      version: data.version,
      id: snapshot.id,
      codigo: data.codigo,
      nombre: data.nombre,
      padreId: data.padreId,
      nombreCompleto: data.nombreCompleto,
      activo: data.activo,
      esHoja: data.esHoja,
      ultimaEdicion: data.ultimaEdicion
    };
  }
};

export {type ServiciosRubro, serviciosRubroConverter};
