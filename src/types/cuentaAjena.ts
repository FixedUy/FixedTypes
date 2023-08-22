interface CuentaAjena {
  id: string;
  nombreFantasia: string;
  tipoDocumento: number;
  documento: string;
  razonSocial: string;
  pais: string;
  activo: boolean;
  ultimaEdicion: number;
}

const cuentaAjenaConverter = {
  toFirestore(cuenta: CuentaAjena) {
    return cuenta;
  },
  fromFirestore(snapshot: any): CuentaAjena {
    const data = snapshot.data()!;
    return {
      id: snapshot.id,
      nombreFantasia: data.nombrenombreFantasia,
      tipoDocumento: data.tipoDocumento,
      documento: data.documento,
      razonSocial: data.razonSocial,
      pais: data.pais,
      activo: data.activo,
      ultimaEdicion: data.ultimaEdicion
    };
  }
};

export {type CuentaAjena, cuentaAjenaConverter};
