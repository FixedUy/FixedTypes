interface FormasDePagoPlazos {
    id: string;
    nombre: string;
    cantDias: number;
    activo: boolean;
    ultimaEdicion: number;
}
declare const pagoEnPlazosConverter: {
    toFirestore(plazo: FormasDePagoPlazos): {};
    fromFirestore(snapshot: any): FormasDePagoPlazos;
};
export { type FormasDePagoPlazos, pagoEnPlazosConverter };
