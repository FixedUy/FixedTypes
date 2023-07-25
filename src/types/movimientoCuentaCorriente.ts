type EnumDictionary<T extends string | symbol | number, U> = {
  [K in T]: U;
};

export enum MovimientoCuentaCorrienteTipo {
  Compra, // compra creada a un proveedor
  CompraNotaCredito, // agregada nota de crédito emitida por un proveedor
  Venta, // creada venta a un cliente
  VentaNotaCredito, // creada nota de credito a un cliente
  VentaNotaDebito, // creada nota de débito a un cliente
  Recibo, // recibo de cobranza a un cliente emitido
  ReciboCompra, // recibo de pago a un proveedor
  AjusteAgregarDeudaCliente,
  AjusteQuitarDeudaCliente,
  AjusteAgregarDeudaProveedor,
  AjusteQuitarDeudaProveedor
}

export const movimientoSuma: EnumDictionary<
  MovimientoCuentaCorrienteTipo,
  boolean
> = {
  [MovimientoCuentaCorrienteTipo.Compra]: false,
  [MovimientoCuentaCorrienteTipo.CompraNotaCredito]: true,
  [MovimientoCuentaCorrienteTipo.Venta]: true,
  [MovimientoCuentaCorrienteTipo.VentaNotaCredito]: false,
  [MovimientoCuentaCorrienteTipo.VentaNotaDebito]: true,
  [MovimientoCuentaCorrienteTipo.Recibo]: true,
  [MovimientoCuentaCorrienteTipo.ReciboCompra]: false,
  [MovimientoCuentaCorrienteTipo.AjusteAgregarDeudaCliente]: true,
  [MovimientoCuentaCorrienteTipo.AjusteQuitarDeudaCliente]: false,
  [MovimientoCuentaCorrienteTipo.AjusteAgregarDeudaProveedor]: false,
  [MovimientoCuentaCorrienteTipo.AjusteQuitarDeudaProveedor]: true
};
