import { ResguardosRetencion } from "./resguardosRetencion";
import { ResguardosReferenciaNormal } from "./resguardosReferenciaNormal";
import { ResguardosReferenciaCFE } from "./resguardosReferenciaCFE";
import { Cliente } from "./cliente";
interface Resguardos {
    id: string;
    fecha: string;
    fechaString: string;
    receptor: Cliente;
    moneda: string;
    retenciones: ResguardosRetencion[];
    referencias: (ResguardosReferenciaCFE | ResguardosReferenciaNormal)[];
    observaciones: string;
    valor: number;
}
declare const resguardosConverter: {
    toFirestore(resguardos: Resguardos): Resguardos;
    fromFirestore(snapshot: any): Resguardos;
};
export { type Resguardos, resguardosConverter };
