import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import { CampoExtraMediosPago } from "./campoExtraMediosPago";
declare class MediosPago {
    version: number;
    id: string;
    nombre: string;
    identificable: boolean;
    requiereVencimiento: boolean;
    camposExtra: CampoExtraMediosPago[];
    activo: boolean;
    ultimaEdicion: number;
    constructor(version: number, id: string, nombre: string, identificable: boolean, requiereVencimiento: boolean, camposExtra: CampoExtraMediosPago[], activo: boolean, ultimaEdicion: number);
}
declare const MediosPagoConverter: {
    toFirestore(mediosPago: MediosPago): DocumentData;
    fromFirestore(snapshot: QueryDocumentSnapshot): MediosPago;
};
export { MediosPago, MediosPagoConverter };
