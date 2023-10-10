interface VentasRelacionImporteTasas {
    tasaIva: string;
    importe: number;
    nroLinea: number;
}
declare const VentasRelacionImporteTasasConverter: {
    toFirestore(ventasRelacionImporteTasas: VentasRelacionImporteTasas): VentasRelacionImporteTasas;
    fromFirestore(snapshot: any): VentasRelacionImporteTasas;
};
export { type VentasRelacionImporteTasas, VentasRelacionImporteTasasConverter };
