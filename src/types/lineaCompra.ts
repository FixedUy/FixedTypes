import {TasaIVA} from "./tasaIVA";

interface LineaCompra {
  cantidad: number;
  descripcion: string;
  rubro: string;
  tasaIva: TasaIVA | string;
  descuentoMontoSinIVA: number;
  descuentoMontoConIVA: number;
  descuentoPorcentaje: number;
  precioSinIva: number;
  precioConIva: number;
  importeSinIVA: number;
  importeConIVA: number;
  stock: boolean;
  idProducto: string;
}
const LineaCompraConverter = {
  toFirestore(linea: LineaCompra) {
    return {};
  },
  fromFirestore(snapshot: any): LineaCompra {
    const data = snapshot.data()!;
    return {
      cantidad: data.cantidad,
      descripcion: data.descripcion,
      rubro: data.rubro,
      tasaIva: data.tasaIva,
      descuentoMontoSinIVA: data.descuentoMontoSinIVA,
      descuentoMontoConIVA: data.descuentoMontoConIVA,
      descuentoPorcentaje: data.descuentoPorcentaje,
      precioSinIva: data.precioSinIva,
      precioConIva: data.precioConIva,
      importeSinIVA: data.importeSinIVA,
      importeConIVA: data.importeConIVA,
      stock: data.stock,
      idProducto: data.idProducto
    };
  }
};

export {type LineaCompra, LineaCompraConverter};
