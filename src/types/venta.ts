import {Cliente} from "./cliente";
import {VentaLinea} from "./ventaLinea";

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
  cliente: Cliente | null;
  moneda: string;
  ventaLinea: VentaLinea[];
  descuentoGeneral: number;
  subtotal: number;
  montoIVA: number;
  redondeo: number;
  total: number;
  saldo: number;
  activo: boolean;
  observaciones: string;
  esDeExportacion: boolean;
  clausulaVenta: string;
  modalidadVenta: string;
  viaTransporte: string;
  usuario: string;
  local: string;
  listasPreciosServicios: string;
  listasPreciosProductos: string;
  buscablePor: null | string[];
  cotizacion: number;
  productos: string[];
  servicios: string[];
  tipo: "venta" | "devolucion" | "notadebito";
  esDeReintegro: boolean;
  periodoDesdeHasta: string;
  ordenCompra: string;
  listaFormaDePago: string;
  fechaVencimiento: string;
  infoAdicional: string;
  ventaLineaImpresion: VentaLinea[];
  combinadoImpresion: VentaLinea | null;
  tcfe: string;
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
      ventaLinea: data.ventaLinea,
      subtotal: data.subtotal,
      montoIVA: data.montoIVA,
      redondeo: data.redondeo,
      total: data.total,
      saldo: data.saldo,
      activo: data.activo,
      observaciones: data.observaciones,
      esDeExportacion: data.esDeExportacion,
      clausulaVenta: data.clausulaVenta,
      modalidadVenta: data.modalidadVenta,
      viaTransporte: data.viaTransporte,
      usuario: data.usuario,
      local: data.local,
      listasPreciosServicios: data.listasPreciosServicios,
      listasPreciosProductos: data.listasPreciosProductos,
      buscablePor: data.buscablePor,
      cotizacion: data.cotizacion,
      productos: data.productos,
      servicios: data.servicios,
      tipo: data.tipo,
      esDeReintegro: data.esDeReintegro,
      periodoDesdeHasta: data.periodoDesdeHasta,
      ordenCompra: data.ordenCompra,
      listaFormaDePago: data.listaFormaDePago,
      fechaVencimiento: data.fechaVencimiento,
      infoAdicional: data.infoAdicional,
      ventaLineaImpresion: data.ventaLineaImpresion,
      combinadoImpresion: data.combinadoImpresion,
      tcfe: data.tcfe
    };
  }
};

export {type Venta, VentaConverter};
