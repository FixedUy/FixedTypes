interface Caja {
  version: number;
  id: string;
  nombre: string;
  saldoMonedas: {[key: string]: number};
  saldoMedios: {
    [medioId: string]: {
      [monedaId: string]: string;
    };
  };
  locales: string;
  ultimaEdicion: number;
  activo: boolean;
}

const CajaConverter = {
  toFirestore(compra: Caja) {
    return {};
  },
  fromFirestore(snapshot: any): Caja {
    const data = snapshot.data()!;
    return {
      version: data.version,
      id: snapshot.id,
      nombre: data.nombre,
      saldoMonedas: data.saldoMonedas,
      saldoMedios: data.saldoMedios,
      locales: data.locales,
      ultimaEdicion: data.ultimaEdicion,
      activo: data.activo
    };
  }
};

export {type Caja, CajaConverter};
