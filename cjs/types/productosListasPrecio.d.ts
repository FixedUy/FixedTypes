import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
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
    toFirestore(servicioListaPrecio: ProductosListasPrecio): DocumentData;
    fromFirestore(snapshot: QueryDocumentSnapshot): ProductosListasPrecio;
};
export { ProductosListasPrecio, ProductosListasPrecioConverter };
