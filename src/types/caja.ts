interface Caja {
  version: number;
  id: string;
  nombre: string;
  saldoMonedas: {[key: string]: number};
  saldoMedios: {
    [medioId: string]: {
      [monedaId: string]: number;
    };
  };
  // Lista de usuarios que pueden hacer retiros de caja,
  // ajustes de quitar, y aceptar depositos.
  puedenRetirar: string[];
  puedenAceptarDepositos: string[];
  mediosCobro: string[];
  mediosPago: string[];
  locales: string[];
  admiteDepositos: string[]; // de que otras cajas admite depositos
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
      mediosCobro: data.mediosCobro,
      mediosPago: data.mediosPago,
      saldoMonedas: data.saldoMonedas,
      saldoMedios: data.saldoMedios,
      locales: data.locales,
      admiteDepositos: data.admiteDepositos,
      ultimaEdicion: data.ultimaEdicion,
      activo: data.activo
    };
  }
};

export {type Caja, cajaConverter};
