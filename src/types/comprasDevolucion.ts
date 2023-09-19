import {Cliente} from "./cliente";
import {CompraLinea} from "./compraLinea";
import {ComprasFacturasDevueltaCantidad} from "./comprasFacturasDevueltaCantidad";
import {ComprasFacturasDevueltaImporte} from "./comprasFacturasDevueltaImporte";

interface CompraDevolucion {
  version: number;
  id: string;
  formaDePago: string;
  fechaComprobante: number;
  fechaComprobanteString: string;
  fechaCreacion: number;
  comprobante: string;
  serie: string;
  numero: number;
  proveedor: Cliente;
  moneda: string;
  descuentoGeneral: number;
  compraLinea: CompraLinea[];
  tipo: string;
  subtotal: number;
  montoIVA: number;
  total: number;
  saldo: number;
  activo: boolean;
  observaciones: string;
  usuario: string;
  local: string;
  buscablePor: null | string[];
  productos: string[];
  detalleDevolucion: ComprasFacturasDevueltaCantidad[];
  detalleDevolucionImporte: ComprasFacturasDevueltaImporte[];
}

const CompraDevolucionConverter = {
  toFirestore(compraDevolucion: CompraDevolucion) {
    return compraDevolucion;
  },
  fromFirestore(snapshot: any): CompraDevolucion {
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
      proveedor: data.proveedor,
      moneda: data.moneda,
      descuentoGeneral: data.descuentoGeneral,
      compraLinea: data.compraLinea,
      tipo: data.tipo,
      subtotal: data.subtotal,
      montoIVA: data.montoIVA,
      total: data.total,
      saldo: data.saldo,
      activo: data.activo,
      observaciones: data.observaciones,
      usuario: data.usuario,
      local: data.local,
      buscablePor: data.buscablePor,
      productos: data.productos,
      detalleDevolucion: data.detalleDevolucion,
      detalleDevolucionImporte: data.detalleDevolucionImporte
    };
  }
};

export {type CompraDevolucion, CompraDevolucionConverter};
