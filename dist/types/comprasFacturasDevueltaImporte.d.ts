interface ComprasFacturasDevueltaImporte {
    idDocumento: string;
    idCompra: string;
    descripcion: string;
    relacionImporteTasasPendientes: ComprasFacturasDevueltaImporte[];
    relacionImporteTasasCancelar: ComprasFacturasDevueltaImporte[];
}
declare const ComprasFacturasDevueltaImporteConverter: {
    toFirestore(comprasFacturasDevueltaImporte: ComprasFacturasDevueltaImporte): ComprasFacturasDevueltaImporte;
    fromFirestore(snapshot: any): ComprasFacturasDevueltaImporte;
};
export { type ComprasFacturasDevueltaImporte, ComprasFacturasDevueltaImporteConverter };
