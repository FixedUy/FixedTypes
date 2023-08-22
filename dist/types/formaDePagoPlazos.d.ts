interface FormasDePagoPlazos {
    id: string;
    nombre: string;
    cantDias: number;
    activo: boolean;
    ultimaEdicion: number;
}
declare const pagoEnPlazosConverter: {
<<<<<<< HEAD
    toFirestore(plazo: FormasDePagoPlazos): {};
    fromFirestore(snapshot: any): FormasDePagoPlazos;
=======
    toFirestore(plazo: PagoEnPlazos): PagoEnPlazos;
    fromFirestore(snapshot: any): PagoEnPlazos;
>>>>>>> 41c2a203b1aa8d69604732cc70cf952e61e3488a
};
export { type FormasDePagoPlazos, pagoEnPlazosConverter };
