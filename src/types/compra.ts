import {Cliente} from "./cliente";
import {LineaCompra} from "./lineaCompra";
import {Moneda} from "./moneda";

interface Compra {
  version: number;
  id: string;
  formaDePago: string;
  fechaComprobante: number;
  fechaCreacionString: string;
  fechaCreacion: number;
  comprobante: string;
  serie: string;
  numero: number;
  proveedor: Cliente;
  moneda: string;
  descuentoGeneral: number;
  lineaCompra: LineaCompra[];
  tipo: string;
  subtotal: number;
  montoIVA: number;
  total: number;
  saldo: number;
  activo: boolean;
  observaciones: string;
}

const CompraConverter = {
  toFirestore(compra: Compra) {
    return {};
  },
  fromFirestore(snapshot: any): Compra {
    const data = snapshot.data()!;
    return {
      version: data.version,
      id: snapshot.id,
      formaDePago: data.formaDePago,
      fechaComprobante: data.fechaComprobante,
      fechaCreacionString: data.fechaCreacionString,
      fechaCreacion: data.fechaCreacion,
      comprobante: data.comprobante,
      serie: data.serie,
      numero: data.numero,
      proveedor: data.proveedor,
      moneda: data.moneda,
      descuentoGeneral: data.descuentoGeneral,
      lineaCompra: data.lineaCompra,
      tipo: data.tipo,
      subtotal: data.subtotal,
      montoIVA: data.montoIVA,
      total: data.total,
      saldo: data.saldo,
      activo: data.activo,
      observaciones: data.observaciones
    };
  }
};

export {type Compra, CompraConverter};
