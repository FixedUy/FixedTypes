interface Caja {
    version: number;
    id: string;
    nombre: string;
    saldoMonedas: {
        [key: string]: number;
    };
    saldoMedios: {
        [medioId: string]: {
            [monedaId: string]: string;
        };
    };
    locales: string;
    activo: boolean;
}
declare const CajaConverter: {
    toFirestore(compra: Caja): {};
    fromFirestore(snapshot: any): Caja;
};
export { type Caja, CajaConverter };
