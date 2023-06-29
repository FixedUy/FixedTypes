import { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
import { TasaIVA } from "./tasaIVA";
import { Moneda } from "./moneda";
declare class ServiciosPrecios {
    id: string;
    nombre: string;
    tasa: TasaIVA | string;
    precioSinIva: number;
    precioConIva: number;
    moneda: Moneda | string;
    precioArbitrario: boolean;
    constructor(id: string, nombre: string, tasa: TasaIVA | string, precioSinIva: number, precioConIva: number, moneda: Moneda | string, precioArbitrario: boolean);
}
declare const ServiciosPreciosConverter: {
    toFirestore(serviciosPreciosAux: ServiciosPrecios): DocumentData;
    fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): ServiciosPrecios;
};
export { ServiciosPrecios, ServiciosPreciosConverter };
