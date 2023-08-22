interface FormasDePagoPlazos {
    id: string;
    nombre: string;
    cantDias: number;
    activo: boolean;
    ultimaEdicion: number;
}
declare const FormasDePagoPlazosConverter: {
    toFirestore(plazo: FormasDePagoPlazos): {};
    fromFirestore(snapshot: any): FormasDePagoPlazos;
};
export { type FormasDePagoPlazos, FormasDePagoPlazosConverter };
