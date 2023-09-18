interface InterfazPendienteImporte {
    version: number;
    descripcion: string;
    importe: number;
    tasaIVA: string;
    nroLinea: number;
}
declare const InterfazPendienteImporteConverter: {
    toFirestore(interfazPendienteImporte: InterfazPendienteImporte): InterfazPendienteImporte;
    fromFirestore(snapshot: any): InterfazPendienteImporte;
};
export { type InterfazPendienteImporte, InterfazPendienteImporteConverter };
