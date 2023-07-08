import { ServiciosPrecios } from "./serviciosPrecios";
import { ServiciosRubro } from "./serviciosRubros";
interface Servicio {
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
}
declare const servicioConverter: {
    toFirestore(servicio: Servicio): {};
    fromFirestore(snapshot: any): Servicio;
};
export { type Servicio, servicioConverter };
