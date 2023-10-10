import { VentasDevolucionLineaCantidad } from "./ventasDevolucionLineaCantidad";
interface VentasFacturasDevueltaCantidad {
    idDocumento: string;
    idVenta: string;
    lineasVenta: VentasDevolucionLineaCantidad[];
}
declare const VentasFacturasDevueltaCantidadConverter: {
    toFirestore(ventasFacturasDevueltaCantidad: VentasFacturasDevueltaCantidad): VentasFacturasDevueltaCantidad;
    fromFirestore(snapshot: any): VentasFacturasDevueltaCantidad;
};
export { type VentasFacturasDevueltaCantidad, VentasFacturasDevueltaCantidadConverter };
