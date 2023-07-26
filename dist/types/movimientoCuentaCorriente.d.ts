type EnumDictionary<T extends string | symbol | number, U> = {
    [K in T]: U;
};
export declare enum TipoMovimiento {
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
export declare const movimientoSuma: EnumDictionary<TipoMovimiento, boolean>;
interface MovimientoCC {
    id: string;
    version: number;
    idMoneda: string;
    importe: number;
    saldo: number;
    descripcion: string;
    idDocumento: string;
    tipo: TipoMovimiento;
    secuencia: number;
    fecha: number;
    fechaString: string;
    fechaRealizado: number;
    usuario: string;
}
declare const movimientoCCConverter: {
    toFirestore(movimiento: MovimientoCC): {};
    fromFirestore(snapshot: any): MovimientoCC;
};
export { type MovimientoCC, movimientoCCConverter };
