interface ComprasRelacionImporteTasas {
    tasaIva: string;
    importe: number;
    nroLinea: number;
}
declare const ComprasRelacionImporteTasasConverter: {
    toFirestore(comprasRelacionImporteTasas: ComprasRelacionImporteTasas): ComprasRelacionImporteTasas;
    fromFirestore(snapshot: any): ComprasRelacionImporteTasas;
};
export { type ComprasRelacionImporteTasas, ComprasRelacionImporteTasasConverter };
