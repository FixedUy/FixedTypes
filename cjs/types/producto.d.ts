import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import { ProductosPrecios } from "./productosPrecios";
import { ProductosRubro } from "./productosRubros";
declare class Producto {
    version: number;
    id: string;
    codigo: string[];
    nombre: string;
    rubro: ProductosRubro | string;
    listaPrecio: {
        [key: string]: ProductosPrecios;
    };
    unidad: string;
    activo: boolean;
    constructor(version: number, id: string, codigo: string[], nombre: string, rubro: ProductosRubro | string, listaPrecio: {
        [key: string]: ProductosPrecios;
    }, unidad: string, activo: boolean);
}
declare const ProductoConverter: {
    toFirestore(servicio: Producto): DocumentData;
    fromFirestore(snapshot: QueryDocumentSnapshot): Producto;
};
export { Producto, ProductoConverter };
