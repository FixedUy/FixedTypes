import {TasaIVA} from "./tasaIVA";

interface LineaCompra {
  cantidad: number;
  descripcion: string;
  rubro: string;
  tasaIva: TasaIVA | string;
  precioSinIva: number;
  precioConIva: number;
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
      precioSinIva: data.precioSinIva,
      precioConIva: data.precioConIva
    };
  }
};

export {type LineaCompra, LineaCompraConverter};
