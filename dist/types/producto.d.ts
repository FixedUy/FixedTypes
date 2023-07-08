import { ProductosPrecios } from "./productosPrecios";
import { ProductosRubro } from "./productosRubros";
interface Producto {
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
}
declare const productoConverter: {
    toFirestore(producto: Producto): {};
    fromFirestore(snapshot: any): Producto;
};
export { type Producto, productoConverter };
