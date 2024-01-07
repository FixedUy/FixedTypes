interface AccesoSMTP {
  id: string;
  nombreCuenta: string;
  usuario: string;
  clave: string;
  host: string;
  puerto: string;
}

const accesoSMTPConverter = {
  toFirestore(accesoSMTP: AccesoSMTP) {
    return accesoSMTP;
  },
  fromFirestore(snapshot: any): AccesoSMTP {
    const data = snapshot.data()!;

    return {
      id: snapshot.id,
      nombreCuenta: data.nombreCuenta,
      usuario: data.usuario,
      clave: data.clave,
      host: data.host,
      puerto: data.puerto
    };
  }
};

export {type AccesoSMTP, accesoSMTPConverter};
