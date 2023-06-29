import { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
declare class Moneda {
    id: string;
    nombre: string;
    simbolo: string;
    codigoBcu: number | string;
    codigoIso: string;
    numeroIso: number | string;
    activo: boolean;
    ultimaEdicion: number;
    constructor(id: string, nombre: string, simbolo: string, codigoBcu: number | string, codigoIso: string, numeroIso: number | string, activo: boolean, ultimaEdicion: number);
}
declare const monedaConverter: {
    toFirestore(moneda: Moneda): DocumentData;
    fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Moneda;
};
export { Moneda, monedaConverter };
