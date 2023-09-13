interface Caja {
    version: number;
    id: string;
    nombre: string;
    saldoMonedas: {
        [key: string]: number;
    };
    saldoMedios: {
        [medioId: string]: {
            [monedaId: string]: number;
        };
    };
    puedenRetirar: string[];
    puedenAceptarDepositos: string[];
    mediosCobro: string[];
    mediosPago: string[];
    locales: string[];
    admiteDepositos: string[];
    ultimaEdicion: number;
    activo: boolean;
}
declare const cajaConverter: {
    toFirestore(caja: Caja): Caja;
    fromFirestore(snapshot: any): Caja;
};
export { type Caja, cajaConverter };
