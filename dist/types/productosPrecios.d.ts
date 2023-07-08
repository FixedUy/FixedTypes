import { Moneda } from "./moneda";
import { TasaIVA } from "./tasaIVA";
interface ProductosPrecios {
    idLista: string;
    tasa: TasaIVA | string;
    precioSinIva: number;
    precioConIva: number;
    moneda: Moneda | string;
    precioArbitrario: boolean;
}
declare const productosPreciosConverter: {
    toFirestore(lista: ProductosPrecios): {
        idLista: string;
        tasa: string | TasaIVA;
        precioSinIva: number;
        precioConIva: number;
        moneda: string | Moneda;
        precioArbitrario: boolean;
    };
    fromFirestore(snapshot: any): ProductosPrecios;
};
export { type ProductosPrecios, productosPreciosConverter };
