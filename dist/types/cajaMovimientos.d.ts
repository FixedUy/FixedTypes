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
    AjusteQuitar = "ajustequitar",
    DepositoCreado = "depositocreado",
    DepositoRecibido = "depositorecibido",
    DepositoCancelado = "depositocancelado",
    DepositoRechazado = "depositorechazado"
}
export declare const movimientoSumaCaja: EnumDictionary<string, boolean>;
interface CajaMovimiento {
    version: number;
    id: string;
    autor: string;
    fechaCreacion: number;
    saldoMonedas: {
        [key: string]: number;
    };
    saldoMedios: {
        [medioId: string]: {
            [monedaId: string]: number;
        };
    };
    detalle: string;
    tipo: CajaTipoMovimiento;
    idDocumento: string;
}
declare const cajaMovimientoConverter: {
    toFirestore(cajaMovimiento: CajaMovimiento): CajaMovimiento;
    fromFirestore(snapshot: any): CajaMovimiento;
};
export { type CajaMovimiento, cajaMovimientoConverter };
