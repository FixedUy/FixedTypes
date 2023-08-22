interface CajaMediosPagoCampoExtra {
    tipo: string;
    nombre: string;
    opciones: string[];
    obligatorio: boolean;
}
interface CajaMediosPago {
    version: number;
    id: string;
    nombre: string;
    requiereVencimiento: boolean;
    camposExtra: CajaMediosPagoCampoExtra[];
    activo: boolean;
    ultimaEdicion: number;
}
declare const cajaMediosPagoConverter: {
    toFirestore(mediosPago: CajaMediosPago): CajaMediosPago;
    fromFirestore(snapshot: any): CajaMediosPago;
};
export { type CajaMediosPago, cajaMediosPagoConverter };
