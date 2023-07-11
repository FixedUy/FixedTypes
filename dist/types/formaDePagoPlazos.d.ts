interface PagoEnPlazos {
    id: string;
    nombre: string;
    cantDias: number;
    activo: boolean;
    ultimaEdicion: number;
}
declare const pagoEnPlazosConverter: {
    toFirestore(plazo: PagoEnPlazos): {};
    fromFirestore(snapshot: any): PagoEnPlazos;
};
export { type PagoEnPlazos, pagoEnPlazosConverter };
