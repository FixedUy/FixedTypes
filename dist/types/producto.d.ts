import { ProductosPrecios } from "./productosPrecios";
interface Producto {
    version: number;
    id: string;
    codigo: string[];
    nombre: string;
    rubroId: string;
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
    buscablePor: null | string[];
}
declare const productoConverter: {
    toFirestore(producto: Producto): Producto;
    fromFirestore(snapshot: any): Producto;
};
export { type Producto, productoConverter };
