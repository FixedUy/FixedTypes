import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
declare class Local {
    id: string;
    nombreComercial: string;
    nombre: string;
    direccion: string;
    localidad: string;
    departamento: string;
    codigoDgi: number;
    logo: string;
    logoURL: string;
    activo: boolean;
    ultimaEdicion: number;
    constructor(id: string, nombreComercial: string, nombre: string, direccion: string, localidad: string, departamento: string, codigoDgi: number, logo: string, logoURL: string, activo: boolean, ultimaEdicion: number);
}
declare const localConverter: {
    toFirestore(local: Local): DocumentData;
    fromFirestore(snapshot: QueryDocumentSnapshot): Local;
};
export { Local, localConverter };
