import { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
declare class CampoExtraMediosPago {
    tipo: string;
    nombre: string;
    obligatorio: boolean;
    constructor(tipo: string, nombre: string, obligatorio: boolean);
}
declare const CampoExtraMediosPagoConverter: {
    toFirestore(campoExtra: CampoExtraMediosPago): DocumentData;
    fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): CampoExtraMediosPago;
};
export { CampoExtraMediosPago, CampoExtraMediosPagoConverter };
