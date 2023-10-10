interface VentasDevolucionLineaCantidad {
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

const VentasDevolucionLineaCantidadConverter = {
  toFirestore(ventasDevolucionLineaCantidad: VentasDevolucionLineaCantidad) {
    return ventasDevolucionLineaCantidad;
  },
  fromFirestore(snapshot: any): VentasDevolucionLineaCantidad {
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
  type VentasDevolucionLineaCantidad,
  VentasDevolucionLineaCantidadConverter
};
