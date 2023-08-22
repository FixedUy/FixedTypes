interface ProductosRubro {
    version: number;
    id: string;
    codigo: string;
    nombre: string;
    padreId: string | null;
    nombreCompleto: string;
    activo: boolean;
    esHoja: boolean;
    ultimaEdicion: number;
}
declare const productosRubroConverter: {
    toFirestore(productoRubro: ProductosRubro): ProductosRubro;
    fromFirestore(snapshot: any): ProductosRubro;
};
export { type ProductosRubro, productosRubroConverter };
