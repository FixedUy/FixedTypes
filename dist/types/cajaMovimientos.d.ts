type EnumDictionary<T extends string, U> = {
    [K in T]: U;
};
export declare enum CajaTipoMovimiento {
    Compra = "compra",
    CompraNotaCredito = "compranotacredito",
    Venta = "venta",
    VentaNotaCredito = "ventanotacredito",
    VentaNotaDebito = "ventanotadebito",
    AjusteAgregar = "ajusteagregar",
    AjusteQuitar = "ajustequitar"
}
export declare const movimientoSumaCaja: EnumDictionary<string, boolean>;
interface CajaMovimiento {
    version: number;
    id: string;
    autor: string;
    fechaCreacion: number;
    monto: number;
    saldo: number;
    idMedio: string;
    idMoneda: string;
    detalleMovimiento: string;
    tipo: CajaTipoMovimiento;
    idDocumento: string;
}
declare const CajaMovimientoConverter: {
    toFirestore(cajaMovimiento: CajaMovimiento): CajaMovimiento;
    fromFirestore(snapshot: any): CajaMovimiento;
};
export { type CajaMovimiento, CajaMovimientoConverter };
