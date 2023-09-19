interface ComprasDevolucionLineaCantidad {
  cantidadPendiente: number;
  cantidadDevolver: number;
  descripcion: string;
  rubro: string;
  centroCosto: string;
  tasaIva: string;
  montoBruto: number;
  precio: number;
  importe: number;
  stock: boolean;
  idProducto: string;
  nroLinea: number;
}

const ComprasDevolucionLineaCantidadConverter = {
  toFirestore(comprasDevolucionLineaCantidad: ComprasDevolucionLineaCantidad) {
    return comprasDevolucionLineaCantidad;
  },
  fromFirestore(snapshot: any): ComprasDevolucionLineaCantidad {
    const data = snapshot.data()!;
    return {
      cantidadPendiente: data.cantidadPendiente,
      cantidadDevolver: data.cantidadDevolver,
      descripcion: data.descripcion,
      rubro: data.rubro,
      centroCosto: data.centroCosto,
      tasaIva: data.tasaIva,
      montoBruto: data.montoBruto,
      precio: data.precio,
      importe: data.importe,
      stock: data.stock,
      idProducto: data.idProducto,
      nroLinea: data.nroLinea
    };
  }
};

export {
  type ComprasDevolucionLineaCantidad,
  ComprasDevolucionLineaCantidadConverter
};
