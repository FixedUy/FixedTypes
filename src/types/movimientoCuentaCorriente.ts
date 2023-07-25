type EnumDictionary<T extends string | symbol | number, U> = {
  [K in T]: U;
};

export enum TipoMovimiento {
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

export const movimientoSuma: EnumDictionary<TipoMovimiento, boolean> = {
  [TipoMovimiento.Compra]: false,
  [TipoMovimiento.CompraNotaCredito]: true,
  [TipoMovimiento.Venta]: true,
  [TipoMovimiento.VentaNotaCredito]: false,
  [TipoMovimiento.VentaNotaDebito]: true,
  [TipoMovimiento.Recibo]: true,
  [TipoMovimiento.ReciboCompra]: false,
  [TipoMovimiento.AjusteAgregarDeudaCliente]: true,
  [TipoMovimiento.AjusteQuitarDeudaCliente]: false,
  [TipoMovimiento.AjusteAgregarDeudaProveedor]: false,
  [TipoMovimiento.AjusteQuitarDeudaProveedor]: true
};
