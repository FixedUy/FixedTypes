import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
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
    fromFirestore(snapshot: QueryDocumentSnapshot): ServiciosRubro;
};
export { ServiciosRubro, ServiciosRubroConverter };
