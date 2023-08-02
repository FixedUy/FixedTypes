interface CompraLinea {
  cantidad: number;
  descripcion: string;
  rubro: string;
  incluyeIva: boolean;
  tasaIva: string;
  descuentoMonto: number;
  descuentoPorcentaje: number;
  precio: number;
  importe: number;
  stock: boolean;
  idProducto: string;
}
declare const CompraLineaConverter: {
  toFirestore(linea: CompraLinea): {};
  fromFirestore(snapshot: any): CompraLinea;
};
export {type CompraLinea, CompraLineaConverter};
