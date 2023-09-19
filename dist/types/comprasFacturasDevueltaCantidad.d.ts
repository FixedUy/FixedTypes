import { ComprasDevolucionLineaCantidad } from "./comprasDevolucionLineaCantidad";
interface ComprasFacturasDevueltaCantidad {
    idDocumento: string;
    idCompra: string;
    lineasCompra: ComprasDevolucionLineaCantidad[];
}
declare const ComprasFacturasDevueltaCantidadConverter: {
    toFirestore(comprasFacturasDevueltaCantidad: ComprasFacturasDevueltaCantidad): ComprasFacturasDevueltaCantidad;
    fromFirestore(snapshot: any): ComprasFacturasDevueltaCantidad;
};
export { type ComprasFacturasDevueltaCantidad, ComprasFacturasDevueltaCantidadConverter };
