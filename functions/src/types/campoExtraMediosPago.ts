/* eslint-disable arrow-parens */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable require-jsdoc */
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
      obligatorio: campoExtra.obligatorio
    };
  },
  fromFirestore(snapshot: any): CampoExtraMediosPago {
    const data = snapshot.data()!;
    return new CampoExtraMediosPago(data.tipo, data.nombre, data.obligatorio);
  }
};

export {CampoExtraMediosPago, CampoExtraMediosPagoConverter};
