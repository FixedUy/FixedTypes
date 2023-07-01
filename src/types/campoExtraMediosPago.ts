class CampoExtraMediosPago {
  tipo: string;
  nombre: string;
  obligatorio: boolean;

  constructor(tipo: string, nombre: string, obligatorio: boolean) {
    this.tipo = tipo;
    this.nombre = nombre;
    this.obligatorio = obligatorio;
  }
}

const CampoExtraMediosPagoConverter = {
  toFirestore(campoExtra: CampoExtraMediosPago) {
    return {
      tipo: campoExtra.tipo,
      nombre: campoExtra.nombre,
      obligatorio: campoExtra.obligatorio,
    };
  },
  fromFirestore(snapshot): CampoExtraMediosPago {
    const data = snapshot.data()!;
    return new CampoExtraMediosPago(data.tipo, data.nombre, data.obligatorio);
  },
};

export { CampoExtraMediosPago, CampoExtraMediosPagoConverter };
