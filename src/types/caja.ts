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
  // Lista de usuarios que pueden hacer retiros de caja,
  // ajustes de quitar, y aceptar depositos.
  puedenRetirar: string[];
  puedenAceptarDepositos: string[];
  locales: string[];
  ultimaEdicion: number;
  activo: boolean;
}

const cajaConverter = {
  toFirestore(caja: Caja) {
    return caja;
  },
  fromFirestore(snapshot: any): Caja {
    const data = snapshot.data()!;
    return {
      version: data.version,
      id: snapshot.id,
      nombre: data.nombre,
      puedenRetirar: data.puedenRetirar,
      puedenAceptarDepositos: data.puedenAceptarDepositos,
      saldoMonedas: data.saldoMonedas,
      saldoMedios: data.saldoMedios,
      locales: data.locales,
      ultimaEdicion: data.ultimaEdicion,
      activo: data.activo
    };
  }
};

export {type Caja, cajaConverter};