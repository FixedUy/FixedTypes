import { Cotizacion } from "./cotizacion";
interface Cotizaciones {
    fecha: string;
    cotizaciones: Cotizacion[];
}
declare const cotizacionesConverter: {
    toFirestore(cotizacion: Cotizaciones): Cotizaciones;
    fromFirestore(snapshot: any): Cotizaciones;
};
export { type Cotizaciones, cotizacionesConverter };
