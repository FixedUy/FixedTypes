export interface OpcionesVentaRol {
  monedasHabilitadas: string[];
  clienteDefecto: "nuevo" | "existente" | "defecto";
  monedaDefecto: string;
  verRespuestaComercialCFE: boolean;
  comprobantesCuentaTerceros: boolean;
  controlarCaja: boolean;
  periodoDesdeHasta: boolean;
  modificarCotizacion: boolean;
  campoOrdenCompra: boolean;
  descuentos: boolean;
  descripcionLarga: boolean;
  modificarListaPrecio: boolean;
  redondear: boolean;
  facturarRemitos: boolean;
  lineaManual: boolean;
  domicilioEntrega: boolean;
  notasDebitoParciales: boolean;
  emitirContado: boolean;
  emitirCredito: boolean;
  modificarFecha: boolean;
  fechaDefecto: "hoy" | "ultima";
  fechaDefectoDevoluciones: "hoy" | "factura";
  comprobanteDefecto: "contado" | "credito";
  usarVencimiento: boolean;
  mostrarPrecios: "conIVA" | "sinIVA";
  cambioInformacionPersonalB16: boolean;
  modalidadVenta: boolean;
  montoRetenido: boolean;
  modificarIVA: boolean;
  autoEscribirConcepto: boolean;
  // Impresion
  imprimirCodigo: boolean;
  modificarVistaImpresion: boolean;
  autoImpresion: boolean;
  impresionForzarDescarga: boolean;
  imprimirA4: boolean;
  imprimirTicket: boolean;
  impresionEFactura: "a4" | "ticket";
  impresionETicket: "a4" | "ticket";
  imprimirPrecioConSinDescuento: boolean;
  imprimirImporteConSinDescuento: boolean;
  imprimirNombreComercial: boolean;
  textoAdicionalBajoDireccion: "";
  textoAdicionalBajoLogo: "";
}

export const opcionesVentaRolDefecto: OpcionesVentaRol = {
  monedasHabilitadas: [],
  clienteDefecto: "nuevo",
  monedaDefecto: "",
  verRespuestaComercialCFE: false,
  comprobantesCuentaTerceros: false,
  controlarCaja: false,
  periodoDesdeHasta: false,
  modificarCotizacion: false,
  campoOrdenCompra: false,
  descuentos: true,
  descripcionLarga: false,
  modificarListaPrecio: false,
  redondear: true,
  facturarRemitos: false,
  lineaManual: true,
  domicilioEntrega: false,
  notasDebitoParciales: false,
  emitirContado: true,
  emitirCredito: true,
  modificarFecha: true,
  fechaDefecto: "hoy",
  fechaDefectoDevoluciones: "hoy",
  comprobanteDefecto: "contado",
  usarVencimiento: false,
  mostrarPrecios: "sinIVA",
  cambioInformacionPersonalB16: false,
  modalidadVenta: false,
  montoRetenido: false,
  modificarIVA: true,
  autoEscribirConcepto: false,
  // Impresion
  imprimirCodigo: true,
  modificarVistaImpresion: false,
  autoImpresion: false,
  impresionForzarDescarga: false,
  imprimirA4: true,
  imprimirTicket: false,
  impresionEFactura: "a4",
  impresionETicket: "a4",
  imprimirPrecioConSinDescuento: false,
  imprimirImporteConSinDescuento: false,
  imprimirNombreComercial: false,
  textoAdicionalBajoDireccion: "",
  textoAdicionalBajoLogo: ""
};
