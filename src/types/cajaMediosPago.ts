interface CajaMediosPagoCampoExtra {
  tipo: string;
  nombre: string;
  opciones: string[];
  obligatorio: boolean;
}

interface CajaMediosPago {
  version: number;
  id: string;
  nombre: string;
  requiereVencimiento: boolean;
  camposExtra: CajaMediosPagoCampoExtra[];
  activo: boolean;
  ultimaEdicion: number;
}

const cajaMediosPagoConverter = {
  toFirestore(mediosPago: CajaMediosPago) {
    return mediosPago;
  },
  fromFirestore(snapshot: any): CajaMediosPago {
    const data = snapshot.data()!;
    return {
      version: data.version,
      id: snapshot.id,
      nombre: data.nombre,
      requiereVencimiento: data.requiereVencimiento,
      camposExtra: data.camposExtra,
      // camposExtra: campoExtraMediosPago,
      activo: data.activo,
      ultimaEdicion: data.ultimaEdicion
    };
  }
};

export {type CajaMediosPago, cajaMediosPagoConverter};
