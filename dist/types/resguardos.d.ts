import { ResguardosRetencion } from "./resguardosRetencion";
import { ResguardosReferenciaNormal } from "./resguardosReferenciaNormal";
import { ResguardosReferenciaCFE } from "./resguardosReferenciaCFE";
interface Resguardos {
    fecha: string | number;
    receptor: string;
    moneda: string;
    retenciones: ResguardosRetencion[];
    referencias: (ResguardosReferenciaCFE | ResguardosReferenciaNormal)[];
    observaciones: string;
}
export { type Resguardos };
