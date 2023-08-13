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
    puedenRetirar: string[];
    locales: string;
    ultimaEdicion: number;
    activo: boolean;
}
declare const CajaConverter: {
    toFirestore(caja: Caja): Caja;
    fromFirestore(snapshot: any): Caja;
};
export { type Caja, CajaConverter };
