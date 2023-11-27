import { ResguardosRetencion } from "./resguardosRetencion";
import { ResguardosReferenciaNormal } from "./resguardosReferenciaNormal";
import { ResguardosReferenciaCFE } from "./resguardosReferenciaCFE";
interface Resguardos {
    activo: boolean;
    id: string;
    emisorId: string;
    localId: string;
    fecha: number;
    fechaString: string;
    receptorId: string;
    receptorString: string;
    moneda: string;
    retenciones: ResguardosRetencion[];
    referencias: (ResguardosReferenciaCFE | ResguardosReferenciaNormal)[];
    observaciones: string;
    valor: number;
    cfe: string;
}
declare const resguardosConverter: {
    toFirestore(resguardos: Resguardos): Resguardos;
    fromFirestore(snapshot: any): Resguardos;
};
export { type Resguardos, resguardosConverter };
