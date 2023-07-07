import { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
declare class ServiciosRubro {
    version: number;
    id: string;
    codigo: string;
    nombre: string;
    padreId: string | null;
    nombreCompleto: string;
    activo: boolean;
    esHoja: boolean;
    ultimaEdicion: number;
    constructor(version: number, id: string, codigo: string, nombre: string, padreId: string | null, nombreCompleto: string, activo: boolean, esHoja: boolean, ultimaEdicion: number);
}
declare const ServiciosRubroConverter: {
    toFirestore(servicioRubros: ServiciosRubro): DocumentData;
    fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): ServiciosRubro;
};
export { ServiciosRubro, ServiciosRubroConverter };
