interface CampoExtraMediosPago {
    tipo: string;
    nombre: string;
    obligatorio: boolean;
}
declare const CampoExtraMediosPagoConverter: {
    toFirestore(campoExtra: CampoExtraMediosPago): {
        tipo: string;
        nombre: string;
        obligatorio: boolean;
    };
    fromFirestore(snapshot: any): CampoExtraMediosPago;
};
export { type CampoExtraMediosPago, CampoExtraMediosPagoConverter };
