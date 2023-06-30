import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
declare class Unidad {
    version: number;
    id: string;
    nombre: string;
    activo: boolean;
    ultimaEdicion: number;
    constructor(version: number, id: string, nombre: string, activo: boolean, ultimaEdicion: number);
}
declare const UnidadConverter: {
    toFirestore(unidad: Unidad): DocumentData;
    fromFirestore(snapshot: QueryDocumentSnapshot): Unidad;
};
export { Unidad, UnidadConverter };
