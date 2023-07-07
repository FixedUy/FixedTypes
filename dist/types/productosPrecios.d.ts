import { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
import { TasaIVA } from "./tasaIVA";
import { Moneda } from "./moneda";
declare class ProductosPrecios {
    id: string;
    nombre: string;
    tasa: TasaIVA | string;
    precioSinIva: number;
    precioConIva: number;
    moneda: Moneda | string;
    precioArbitrario: boolean;
    constructor(id: string, nombre: string, tasa: TasaIVA | string, precioSinIva: number, precioConIva: number, moneda: Moneda | string, precioArbitrario: boolean);
}
declare const ProductosPreciosConverter: {
    toFirestore(productosPreciosAux: ProductosPrecios): DocumentData;
    fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): ProductosPrecios;
};
export { ProductosPrecios, ProductosPreciosConverter };
