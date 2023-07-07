import { TasaIVA } from "./tasaIVA";
interface LineaCompra {
    cantidad: number;
    descripcion: string;
    rubro: string;
    tasaIva: TasaIVA | string;
    precioSinIva: number;
    precioConIva: number;
}
declare const LineaCompraConverter: {
    toFirestore(linea: LineaCompra): {};
    fromFirestore(snapshot: any): LineaCompra;
};
export { type LineaCompra, LineaCompraConverter };
