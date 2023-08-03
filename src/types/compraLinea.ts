interface CompraLinea {
  cantidad: number;
  descripcion: string;
  rubro: string;
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
}
const CompraLineaConverter = {
  toFirestore(linea: CompraLinea) {
    return {};
  },
  fromFirestore(snapshot: any): CompraLinea {
    const data = snapshot.data()!;
    return {
      cantidad: data.cantidad,
      descripcion: data.descripcion,
      rubro: data.rubro,
      tasaIva: data.tasaIva,
      montoBruto: data.montoBruto,
      descuentoMonto: data.descuentoMonto,
      descuentoPorcentaje: data.descuentoPorcentaje,
      precio: data.precio,
      importe: data.importe,
      stock: data.stock,
      idProducto: data.idProducto
    };
  }
};

export {type CompraLinea, CompraLineaConverter};
