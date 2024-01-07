interface AccesoSMTP {
    id: string;
    nombreCuenta: string;
    usuario: string;
    clave: string;
    host: string;
    puerto: string;
}
declare const accesoSMTPConverter: {
    toFirestore(accesoSMTP: AccesoSMTP): AccesoSMTP;
    fromFirestore(snapshot: any): AccesoSMTP;
};
export { type AccesoSMTP, accesoSMTPConverter };
