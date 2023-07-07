import { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
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
    campoExtra: {
        [key: string]: string;
    };
    stock: {
        [key: string]: number;
    };
    constructor(version: number, id: string, codigo: string[], nombre: string, rubro: ProductosRubro | string, listaPrecio: {
        [key: string]: ProductosPrecios;
    }, unidad: string, activo: boolean, campoExtra: {
        [key: string]: string;
    }, stock: {
        [key: string]: number;
    });
}
declare const ProductoConverter: {
    toFirestore(servicio: Producto): DocumentData;
    fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Producto;
};
export { Producto, ProductoConverter };
