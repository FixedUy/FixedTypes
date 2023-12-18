import { ProductosPrecios } from "./productosPrecios";
interface Producto {
    tipoItem: "producto";
    version: number;
    id: string;
    codigo: {
        [key: string]: string;
    };
    todosLosCodigos: string[];
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
    cantidadDecimales: number;
}
declare const productoConverter: {
    toFirestore(producto: Producto): Producto;
    fromFirestore(snapshot: any): Producto;
};
export { type Producto, productoConverter };
