import { CampoExtraMediosPago } from "./campoExtraMediosPago";
interface MediosPago {
    version: number;
    id: string;
    nombre: string;
    identificable: boolean;
    requiereVencimiento: boolean;
    camposExtra: CampoExtraMediosPago[];
    activo: boolean;
    ultimaEdicion: number;
}
declare const MediosPagoConverter: {
    toFirestore(mediosPago: MediosPago): {};
    fromFirestore(snapshot: any): MediosPago;
};
export { type MediosPago, MediosPagoConverter };
