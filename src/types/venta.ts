import {Cliente} from "./cliente";
import {CompraLinea} from "./compraLinea";

interface Venta {
  version: number;
  id: string;
  formaDePago: string;
  fechaComprobante: number;
  fechaComprobanteString: string;
  fechaCreacion: number;
  comprobante: string;
  serie: string;
  numero: number;  
  cliente: Cliente;
  moneda: string;
  compraLinea: CompraLinea[];
//   ventaLinea: VentaLinea[];
  descuentoGeneral: number;
  subtotal: number;
  montoIVA: number;
  total: number;
  saldo: number;
  activo: boolean;
  observaciones: string;
  usuario: string;
  local: string;
}

const VentaConverter = {
  toFirestore(venta: Venta) {
    return venta;
  },
  fromFirestore(snapshot: any): Venta {
    const data = snapshot.data()!;
    return {
      version: data.version,
      id: snapshot.id,
      formaDePago: data.formaDePago,
      fechaComprobante: data.fechaComprobante,
      fechaComprobanteString: data.fechaComprobanteString,
      fechaCreacion: data.fechaCreacion,
      comprobante: data.comprobante,
      serie: data.serie,
      numero: data.numero,
      cliente: data.cliente,
      moneda: data.moneda,
      descuentoGeneral: data.descuentoGeneral,
      compraLinea: data.compraLinea,
      subtotal: data.subtotal,
      montoIVA: data.montoIVA,
      total: data.total,
      saldo: data.saldo,
      activo: data.activo,
      observaciones: data.observaciones,
      usuario: data.usuario,
      local: data.local
    };
  }
};

export {type Venta, VentaConverter};
