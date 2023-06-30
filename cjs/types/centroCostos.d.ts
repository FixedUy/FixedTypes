import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
declare class CentroCostos {
    id: string;
    nombre: string;
    valorExportacion: number;
    superior: null;
    constructor(id: string, nombre: string, valorExportacion: number, superior: null);
}
declare const centroCostosConverter: {
    toFirestore(centroCostos: CentroCostos): DocumentData;
    fromFirestore(snapshot: QueryDocumentSnapshot): CentroCostos;
};
export { CentroCostos, centroCostosConverter };
