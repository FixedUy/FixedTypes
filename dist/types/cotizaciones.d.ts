import { Cotizacion } from "./cotizacion";
interface Cotizaciones {
    fecha: string;
    cotizaciones: {
        [key: string]: Cotizacion;
    };
}
declare const cotizacionesConverter: {
    toFirestore(cotizacion: Cotizaciones): Cotizaciones;
    fromFirestore(snapshot: any): Cotizaciones;
};
export { type Cotizaciones, cotizacionesConverter };
