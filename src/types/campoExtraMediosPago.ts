interface CampoExtraMediosPago {
  tipo: string;
  nombre: string;
  obligatorio: boolean;
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
    return {
      tipo: data.tipo,
      nombre: data.nombre,
      obligatorio: data.obligatorio
    };
  }
  // fromDataObject(data: any): CampoExtraMediosPago {
  //   return new CampoExtraMediosPago(
  //     data.tipo,
  //     data.nombre,
  //     data.obligatorio
  //   );
  // }
};

export {type CampoExtraMediosPago, CampoExtraMediosPagoConverter};
