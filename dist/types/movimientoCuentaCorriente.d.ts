type EnumDictionary<T extends string | symbol | number, U> = {
    [K in T]: U;
};
export declare enum MovimientoCuentaCorrienteTipo {
    Compra = 0,
    CompraNotaCredito = 1,
    Venta = 2,
    VentaNotaCredito = 3,
    VentaNotaDebito = 4,
    Recibo = 5,
    ReciboCompra = 6,
    AjusteAgregarDeudaCliente = 7,
    AjusteQuitarDeudaCliente = 8,
    AjusteAgregarDeudaProveedor = 9,
    AjusteQuitarDeudaProveedor = 10
}
export declare const movimientoSuma: EnumDictionary<MovimientoCuentaCorrienteTipo, boolean>;
export {};
