interface CompraLinea {
  cantidad: number;
  descripcion: string;
  rubro: string;
  incluyeIva: boolean;
  tasaIva: string;
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
      incluyeIva: data.incluyeIva,
      tasaIva: data.tasaIva,
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
