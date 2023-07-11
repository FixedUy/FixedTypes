import { TasaIVA } from "./tasaIVA";
interface LineaCompra {
    cantidad: number;
    descripcion: string;
    rubro: string;
    tasaIva: TasaIVA | string;
    descuentoMontoSinIVA: number;
    descuentoMontoConIVA: number;
    descuentoPorcentaje: number;
    precioSinIva: number;
    precioConIva: number;
    importeSinIVA: number;
    importeConIVA: number;
}
declare const LineaCompraConverter: {
    toFirestore(linea: LineaCompra): {};
    fromFirestore(snapshot: any): LineaCompra;
};
export { type LineaCompra, LineaCompraConverter };
