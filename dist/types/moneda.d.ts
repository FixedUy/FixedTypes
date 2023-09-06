interface Moneda {
    id: string;
    nombre: string;
    simbolo: string;
    codigoBcu: string;
    codigoIso: string;
    numeroIso: string;
    activo: boolean;
    ultimaEdicion: number;
}
declare const monedaConverter: {
    toFirestore(moneda: Moneda): Moneda;
    fromFirestore(snapshot: any): Moneda;
};
export { type Moneda, monedaConverter };
