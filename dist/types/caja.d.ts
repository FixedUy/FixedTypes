interface CajaDeposito {
    id: string;
    cajaOrigen: string;
    cajaDestino: string;
    monto: number;
    medioCobro: string;
    moneda: string;
}
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
    depositosPendientesImportes: {
        [medioId: string]: {
            [monedaId: string]: number;
        };
    };
    depositosPendientes: CajaDeposito[];
    depositosPendientesAceptarImportes: {
        [medioId: string]: {
            [monedaId: string]: number;
        };
    };
    depositosPendientesAceptar: CajaDeposito[];
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
export { type Caja, cajaConverter, type CajaDeposito };
