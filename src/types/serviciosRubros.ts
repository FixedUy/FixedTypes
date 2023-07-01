class ServiciosRubro {
  version: number;
  id: string;
  codigo: string;
  nombre: string;
  padreId: string | null;
  nombreCompleto: string;
  activo: boolean;
  esHoja: boolean;
  ultimaEdicion: number;

  constructor(
    version: number,
    id: string,
    codigo: string,
    nombre: string,
    padreId: string | null,
    nombreCompleto: string,
    activo: boolean,
    esHoja: boolean,
    ultimaEdicion: number
  ) {
    this.version = version;
    this.id = id;
    this.codigo = codigo;
    this.nombre = nombre;
    this.padreId = padreId;
    this.nombreCompleto = nombreCompleto;
    this.activo = activo;
    this.esHoja = esHoja;
    this.ultimaEdicion = ultimaEdicion;
  }
}

const ServiciosRubroConverter = {
  toFirestore(servicioRubros: ServiciosRubro) {
    return {};
  },
  fromFirestore(snapshot): ServiciosRubro {
    const data = snapshot.data()!;
    return new ServiciosRubro(
      data.version,
      snapshot.id,
      data.codigo,
      data.nombre,
      data.padreId,
      data.nombreCompleto,
      data.activo,
      data.esHoja,
      data.ultimaEdicion
    );
  },
};

export { ServiciosRubro, ServiciosRubroConverter };
