import { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
import { ServiciosPrecios } from "./serviciosPrecios";
import { ServiciosRubro } from "./serviciosRubros";
declare class Servicio {
    version: number;
    id: string;
    codigo: string[];
    nombre: string;
    rubro: ServiciosRubro | string;
    listaPrecio: {
        [key: string]: ServiciosPrecios;
    };
    unidad: string;
    activo: boolean;
    constructor(version: number, id: string, codigo: string[], nombre: string, rubro: ServiciosRubro | string, listaPrecio: {
        [key: string]: ServiciosPrecios;
    }, unidad: string, activo: boolean);
}
declare const ServicioConverter: {
    toFirestore(servicio: Servicio): DocumentData;
    fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Servicio;
};
export { Servicio, ServicioConverter };
