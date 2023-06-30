import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
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
    fromFirestore(snapshot: QueryDocumentSnapshot): ProductosRubro;
};
export { ProductosRubro, ProductosRubroConverter };
