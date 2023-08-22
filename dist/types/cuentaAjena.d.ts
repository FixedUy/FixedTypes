interface CuentaAjena {
    id: string;
    nombreFantasia: string;
    tipoDocumento: number;
    documento: string;
    razonSocial: string;
    pais: string;
    activo: boolean;
    ultimaEdicion: number;
}
declare const cuentaAjenaConverter: {
    toFirestore(cuenta: CuentaAjena): CuentaAjena;
    fromFirestore(snapshot: any): CuentaAjena;
};
export { type CuentaAjena, cuentaAjenaConverter };
