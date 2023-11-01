interface VentaLinea {
  cantidad: number;
  descripcion: string;
  descripcionLarga: string;
  rubro: string;
  centroCosto: string;
  tasaIva: string;
  montoBruto: number;
  // indica si precio y descuento son:
  // 0 = sin iva | 1 = iva incl
  // | 2 = iva imeba incl | 3 = literal e o monitributo
  descuentoMonto: number; // Descuento total, no unitario
  descuentoPorcentaje: number;
  precio: number;
  importe: number; // = (precio * cantidad) - descuentoMonto
  stock: boolean;
  idProducto: string;
  idServicio: string;
  listaPrecio: string;
}

const VentaLineaConverter = {
  toFirestore(linea: VentaLinea) {
    return linea;
  },
  fromFirestore(snapshot: any): VentaLinea {
    const data = snapshot.data()!;
    return {
      cantidad: data.cantidad,
      descripcion: data.descripcion,
      descripcionLarga: data.descripcionLarga,
      rubro: data.rubro,
      centroCosto: data.centroCosto,
      tasaIva: data.tasaIva,
      montoBruto: data.montoBruto,
      descuentoMonto: data.descuentoMonto,
      descuentoPorcentaje: data.descuentoPorcentaje,
      precio: data.precio,
      importe: data.importe,
      stock: data.stock,
      idProducto: data.idProducto,
      idServicio: data.idServicio,
      listaPrecio: data.listaPrecio
    };
  }
};

export {type VentaLinea, VentaLineaConverter};
