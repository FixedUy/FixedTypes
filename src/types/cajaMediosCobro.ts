interface CajaMediosCobroCampoExtra {
  tipo: string;
  nombre: string;
  opciones: string[];
  obligatorio: boolean;
}

interface CajaMediosCobro {
  version: number;
  id: string;
  nombre: string;
  requiereVencimiento: boolean;
  camposExtra: CajaMediosCobroCampoExtra[];
  activo: boolean;
  ultimaEdicion: number;
}

const cajaMediosCobroConverter = {
  toFirestore(mediosCobro: CajaMediosCobro) {
    return mediosCobro;
  },
  fromFirestore(snapshot: any): CajaMediosCobro {
    const data = snapshot.data()!;
    return {
      version: data.version,
      id: snapshot.id,
      nombre: data.nombre,
      requiereVencimiento: data.requiereVencimiento,
      camposExtra: data.camposExtra,
      activo: data.activo,
      ultimaEdicion: data.ultimaEdicion
    };
  }
};

export {type CajaMediosCobro, cajaMediosCobroConverter};
