interface CajaMediosCobroCampoExtra {
    tipo: string;
    nombre: string;
    opciones: string[];
    obligatorio: boolean;
}
interface CajaMediosCobro {
    version: number;
    id: string;
    nombre: string;
    requiereVencimiento: boolean;
    camposExtra: CajaMediosCobroCampoExtra[];
    activo: boolean;
    ultimaEdicion: number;
}
declare const cajaMediosCobroConverter: {
    toFirestore(mediosCobro: CajaMediosCobro): CajaMediosCobro;
    fromFirestore(snapshot: any): CajaMediosCobro;
};
export { type CajaMediosCobro, cajaMediosCobroConverter };
