import {Cliente} from "./cliente";
import {VentaLinea} from "./ventaLinea";
import {VentasFacturasDevueltaCantidad} from "./ventasFacturasDevueltaCantidad";
import {VentasFacturasDevueltaImporte} from "./ventasFacturasDevueltaImporte";

interface VentaDevolucion {
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
  descuentoGeneral: number;
  ventaLinea: VentaLinea[];
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
  tipoDevolucion: string;
  detalleDevolucion: VentasFacturasDevueltaCantidad[];
  detalleDevolucionImporte: VentasFacturasDevueltaImporte[];
  cotizacion: number;
  tcfe: string;
}

const VentaDevolucionConverter = {
  toFirestore(ventaDevolucion: VentaDevolucion) {
    return ventaDevolucion;
  },
  fromFirestore(snapshot: any): VentaDevolucion {
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
      ventaLinea: data.ventaLinea,
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
      tipoDevolucion: data.tipoDevolucion,
      detalleDevolucion: data.detalleDevolucion,
      detalleDevolucionImporte: data.detalleDevolucionImporte,
      cotizacion: data.cotizacion,
      tcfe: data.tcfe
    };
  }
};

export {type VentaDevolucion, VentaDevolucionConverter};
