import { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
declare class ServiciosListasPrecio {
    version: number;
    id: string;
    nombre: string;
    locales: string[];
    clonarId: string;
    activo: boolean;
    ultimaEdicion: number;
    constructor(version: number, id: string, nombre: string, locales: string[], clonarId: string, activo: boolean, ultimaEdicion: number);
}
declare const ServiciosListasPrecioConverter: {
    toFirestore(servicioListaPrecio: ServiciosListasPrecio): DocumentData;
    fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): ServiciosListasPrecio;
};
export { ServiciosListasPrecio, ServiciosListasPrecioConverter };
