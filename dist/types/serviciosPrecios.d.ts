import { Moneda } from "./moneda";
import { TasaIVA } from "./tasaIVA";
interface ServiciosPrecios {
    idLista: string;
    tasa: TasaIVA | string;
    precioSinIva: number;
    precioConIva: number;
    moneda: Moneda | string;
    precioArbitrario: boolean;
}
declare const serviciosPreciosConverter: {
    toFirestore(lista: ServiciosPrecios): {
        idLista: string;
        tasa: string | TasaIVA;
        precioSinIva: number;
        precioConIva: number;
        moneda: string | Moneda;
        precioArbitrario: boolean;
    };
    fromFirestore(snapshot: any): ServiciosPrecios;
};
export { type ServiciosPrecios, serviciosPreciosConverter };
