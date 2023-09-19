interface CajaDeposito {
  id: string;
  fecha: number;
  idUsuarioDepositante: string;
  nombreUsuarioDepositante: string;
  detalle: string;
  cajaOrigen: string;
  cajaDestino: string;
  monto: number;
  medioCobro: string;
  moneda: string;
}
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
  depositosPendientesImportes: {
    [medioId: string]: {
      [monedaId: string]: number;
    };
  };
  depositosPendientes: CajaDeposito[];
  depositosPendientesAceptarImportes: {
    [medioId: string]: {
      [monedaId: string]: number;
    };
  };
  depositosPendientesAceptar: CajaDeposito[];
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
      depositosPendientes: data.depositosPendientes,
      depositosPendientesImportes: data.depositosPendientesImportes,
      depositosPendientesAceptar: data.depositosPendientesAceptar,
      depositosPendientesAceptarImportes:
        data.depositosPendientesAceptarImportes,
      locales: data.locales,
      admiteDepositos: data.admiteDepositos,
      ultimaEdicion: data.ultimaEdicion,
      activo: data.activo
    };
  }
};

export {type Caja, cajaConverter, type CajaDeposito};
