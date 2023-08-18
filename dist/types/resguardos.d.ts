import { ResguardosRetencion } from "./resguardosRetencion";
import { ResguardosReferenciaNormal } from "./resguardosReferenciaNormal";
import { ResguardosReferenciaCFE } from "./resguardosReferenciaCFE";
import { Cliente } from "./cliente";
interface Resguardos {
    fecha: string;
    fechaString: string;
    receptor: Cliente;
    moneda: string;
    retenciones: ResguardosRetencion[];
    referencias: (ResguardosReferenciaCFE | ResguardosReferenciaNormal)[];
    observaciones: string;
    valor: number;
}
export { type Resguardos };
