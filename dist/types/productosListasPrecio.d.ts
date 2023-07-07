import { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
declare class ProductosListasPrecio {
    version: number;
    id: string;
    nombre: string;
    locales: string[];
    clonarId: string;
    activo: boolean;
    ultimaEdicion: number;
    constructor(version: number, id: string, nombre: string, locales: string[], clonarId: string, activo: boolean, ultimaEdicion: number);
}
declare const ProductosListasPrecioConverter: {
    toFirestore(productoListaPrecio: ProductosListasPrecio): DocumentData;
    fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): ProductosListasPrecio;
};
export { ProductosListasPrecio, ProductosListasPrecioConverter };
