import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
declare class Empresa {
    id: string;
    nombreComercial: string;
    rut: string;
    razonSocial: string;
    logoURL: string;
    constructor(id: string, nombreComercial: string, rut: string, razonSocial: string, logoURL: string);
}
declare const empresaConverter: {
    toFirestore(empresa: Empresa): DocumentData;
    fromFirestore(snapshot: QueryDocumentSnapshot): Empresa;
};
export { Empresa, empresaConverter };
