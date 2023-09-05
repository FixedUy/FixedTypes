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
    redondear: {
        [key: string]: boolean;
    };
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
export declare const opcionesVentaRolDefecto: OpcionesVentaRol;
