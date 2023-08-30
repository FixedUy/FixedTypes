interface ProductoSeriales {
  version: number;
  id: string;
  productoId: string;
  serial: string;
  localActual: string; // id del local donde esta actualmente
  // si es vacío, es que no esta en el stock
  fechaIngreso: number; // coincide con la fecha del lote
  // es para simplifiar la lectura
  fechaIngresoString: string;
  fechaSalida: number;
  fechaSalidaString: string;
  loteId: string;
}

const productoSerialesConverter = {
  toFirestore(producto: ProductoSeriales) {
    return producto;
  },
  fromFirestore(snapshot: any): ProductoSeriales {
    const data = snapshot.data()!;

    return {
      version: data.version,
      id: snapshot.id,
      productoId: data.productoId,
      serial: data.serial,
      localActual: data.localActual,
      fechaIngreso: data.fechaIngreso,
      fechaIngresoString: data.fechaIngresoString,
      fechaSalida: data.fechaSalida,
      fechaSalidaString: data.fechaSalidaString,
      loteId: data.loteId
    };
  }
};

export {type ProductoSeriales, productoSerialesConverter};
