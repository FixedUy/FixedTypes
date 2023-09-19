import { ComprasRelacionImporteTasas } from "./comprasRelacionImporteTasas";
interface ComprasFacturasDevueltaImporte {
    idDocumento: string;
    idCompra: string;
    descripcion: string;
    relacionImporteTasasPendientes: ComprasRelacionImporteTasas[];
    relacionImporteTasasCancelar: ComprasRelacionImporteTasas[];
}
declare const ComprasFacturasDevueltaImporteConverter: {
    toFirestore(comprasFacturasDevueltaImporte: ComprasFacturasDevueltaImporte): ComprasFacturasDevueltaImporte;
    fromFirestore(snapshot: any): ComprasFacturasDevueltaImporte;
};
export { type ComprasFacturasDevueltaImporte, ComprasFacturasDevueltaImporteConverter };
