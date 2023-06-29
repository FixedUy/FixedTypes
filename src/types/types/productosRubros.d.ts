import { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
declare class ProductosRubro {
    version: number;
    id: string;
    codigo: string;
    nombre: string;
    padreId: string | null;
    nombreCompleto: string;
    activo: boolean;
    esHoja: boolean;
    ultimaEdicion: number;
    constructor(version: number, id: string, codigo: string, nombre: string, padreId: string | null, nombreCompleto: string, activo: boolean, esHoja: boolean, ultimaEdicion: number);
}
declare const ProductosRubroConverter: {
    toFirestore(servicioRubros: ProductosRubro): DocumentData;
    fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): ProductosRubro;
};
export { ProductosRubro, ProductosRubroConverter };
