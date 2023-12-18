import { ServiciosPrecios } from "./serviciosPrecios";
interface Servicio {
    tipoItem: "servicio";
    version: number;
    id: string;
    codigo: {
        [key: string]: string;
    };
    todosLosCodigos: string[];
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
    buscablePor: null | string[];
    cantidadDecimales: number;
}
declare const servicioConverter: {
    toFirestore(servicio: Servicio): Servicio;
    fromFirestore(snapshot: any): Servicio;
};
export { type Servicio, servicioConverter };
