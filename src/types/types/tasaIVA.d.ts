import { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
declare class TasaIVA {
    id: string;
    nombre: string;
    sigla: string;
    valor: number | string;
    cfeDgi: "Basic" | "Exp" | "Min" | "Exe" | "Otro" | "";
    activoProductos: boolean;
    activoServicios: boolean;
    ultimaEdicion: number;
    constructor(id: string, nombre: string, sigla: string, valor: number | string, cfeDgi: "Basic" | "Exp" | "Min" | "Exe" | "Otro" | "", activoProductos: boolean, activoServicios: boolean, ultimaEdicion: number);
}
declare const tasaConverter: {
    toFirestore(tasa: TasaIVA): DocumentData;
    fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): TasaIVA;
};
export { TasaIVA, tasaConverter };
