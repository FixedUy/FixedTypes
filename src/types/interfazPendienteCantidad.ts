interface InterfazPendienteCantidad {
  version: number;
  cantidadOriginal: number;
  cantidadActual: number;
  nroLinea: number;
  tipo: "producto" | "servicio" | "manual";
  productoId: string;
  servicioId: string;
  descripcion: string;
  precioUnitario: number;
  importe: number;
  tasaIVA: string;
}

const InterfazPendienteCantidadoConverter = {
  toFirestore(interfazPendienteCantidad: InterfazPendienteCantidad) {
    return interfazPendienteCantidad;
  },
  fromFirestore(snapshot: any): InterfazPendienteCantidad {
    const data = snapshot.data()!;
    return {
      version: data.version,
      cantidadOriginal: data.cantidadOriginal,
      cantidadActual: data.cantidadActual,
      nroLinea: data.nroLinea,
      tipo: data.tipo,
      productoId: data.productoId,
      servicioId: data.servicioId,
      descripcion: data.descripcion,
      precioUnitario: data.precioUnitario,
      importe: data.importe,
      tasaIVA: data.tasaIVA
    };
  }
};

export {type InterfazPendienteCantidad, InterfazPendienteCantidadoConverter};
