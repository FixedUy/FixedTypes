type EnumDictionary<T extends string, U> = {
    [K in T]: U;
};
export declare enum TipoMovimiento {
    Compra = "compra",
    CompraNotaCredito = "compranotacredito",
    Venta = "venta",
    VentaNotaCredito = "ventanotacredito",
    VentaNotaDebito = "ventanotadebito",
    Recibo = "recibo",
    ReciboCompra = "recibocompra",
    AjusteAgregarDeudaCliente = "ajusteagregardeudacliente",
    AjusteQuitarDeudaCliente = "ajustequitardeudacliente",
    AjusteAgregarDeudaProveedor = "ajusteagregardeudaproveedor",
    AjusteQuitarDeudaProveedor = "ajustequitardeudaproveedor"
}
export declare const movimientoSuma: EnumDictionary<string, boolean>;
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
    toFirestore(movimiento: MovimientoCC): MovimientoCC;
    fromFirestore(snapshot: any): MovimientoCC;
};
export { type MovimientoCC, movimientoCCConverter };
