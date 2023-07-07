interface Moneda {
    id: string;
    nombre: string;
    simbolo: string;
    codigoBcu: number | string;
    codigoIso: string;
    numeroIso: number | string;
    activo: boolean;
    ultimaEdicion: number;
}
declare const monedaConverter: {
    toFirestore(moneda: Moneda): {};
    fromFirestore(snapshot: any): Moneda;
};
export { type Moneda, monedaConverter };
