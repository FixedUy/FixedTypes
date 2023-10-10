import { VentasRelacionImporteTasas } from "./ventasRelacionImporteTasas";
interface VentasFacturasDevueltaImporte {
    idDocumento: string;
    idVenta: string;
    descripcion: string;
    relacionImporteTasasPendientes: VentasRelacionImporteTasas[];
    relacionImporteTasasCancelar: VentasRelacionImporteTasas[];
}
declare const VentasFacturasDevueltaImporteConverter: {
    toFirestore(ventasFacturasDevueltaImporte: VentasFacturasDevueltaImporte): VentasFacturasDevueltaImporte;
    fromFirestore(snapshot: any): VentasFacturasDevueltaImporte;
};
export { type VentasFacturasDevueltaImporte, VentasFacturasDevueltaImporteConverter };
