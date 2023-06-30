import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
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
    campoExtra: {
        [key: string]: string;
    };
    constructor(version: number, id: string, codigo: string[], nombre: string, rubro: ServiciosRubro | string, listaPrecio: {
        [key: string]: ServiciosPrecios;
    }, unidad: string, activo: boolean, campoExtra: {
        [key: string]: string;
    });
}
declare const ServicioConverter: {
    toFirestore(servicio: Servicio): DocumentData;
    fromFirestore(snapshot: QueryDocumentSnapshot): Servicio;
};
export { Servicio, ServicioConverter };