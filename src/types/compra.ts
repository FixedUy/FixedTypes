import {Cliente} from "./cliente";
import {LineaCompra} from "./lineaCompra";
import {Moneda} from "./moneda";

interface Compra {
  version: number;
  id: string;
  formaDePago: string;
  fechaComprobante: number;
  fechaString: string;
  fechaEmision: number;
  comprobante: string;
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
      fechaComprobante: data.fechaNumero,
      fechaString: data.fechaString,
      fechaEmision: data.fechaEmision,
      comprobante: data.comprobante,
      proveedor: data.cliente,
      moneda: data.moneda,
      descuentoGeneral: data.descuentoGeneral,
      lineaCompra: data.lineaCompra,
      tipo: data.tipo,
      subtotal: data.subtotal,
      montoIVA: data.montoIVA,
      total: data.total,
      saldo: data.saldo,
      activo: data.activo
    };
  }
};

export {type Compra, CompraConverter};
