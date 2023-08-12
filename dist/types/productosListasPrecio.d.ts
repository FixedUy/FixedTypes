interface ProductosListasPrecio {
    version: number;
    id: string;
    nombre: string;
    locales: string[];
    clonarId: string;
    activo: boolean;
    ultimaEdicion: number;
}
declare const productosListasPrecioConverter: {
    toFirestore(productoListaPrecio: ProductosListasPrecio): ProductosListasPrecio;
    fromFirestore(snapshot: any): ProductosListasPrecio;
};
export { type ProductosListasPrecio, productosListasPrecioConverter };
