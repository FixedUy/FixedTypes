interface CentroCostos {
    id: string;
    nombre: string;
    valorExportacion: number;
    activo: boolean;
    ultimaEdicion: number;
}
declare const centroCostosConverter: {
    toFirestore(centroCostos: CentroCostos): CentroCostos;
    fromFirestore(snapshot: any): CentroCostos;
};
export { type CentroCostos, centroCostosConverter };
