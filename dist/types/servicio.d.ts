import { ServiciosPrecios } from "./serviciosPrecios";
interface Servicio {
    version: number;
    id: string;
    codigo: string[];
    nombre: string;
    rubroId: string;
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
    toFirestore(servicio: Servicio): Servicio;
    fromFirestore(snapshot: any): Servicio;
};
export { type Servicio, servicioConverter };
