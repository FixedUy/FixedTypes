import {ResguardosRetencion} from "./resguardosRetencion";
import {ResguardosReferencia} from "./resguardosReferencia";

interface Resguardos {
        fecha: string | number;
        receptor: string;
        moneda: string;
        retenciones: ResguardosRetencion[];
        referencias: ResguardosReferencia[];
        observaciones: string;
}

export {type Resguardos};
