import { Empresa } from "./empresa";
import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
declare class Usuario {
    id: string;
    nombre: string;
    mail: string;
    creadoEl: number;
    creadoElString: string;
    empresas: Empresa[];
    vendedor: boolean;
    activo: boolean;
    ultimaEdicion: number;
    constructor(id: string, nombre: string, mail: string, creadoEl: number, empresas: Empresa[], vendedor: boolean, activo: boolean, ultimaEdicion: number);
}
declare const usuarioConverter: {
    toFirestore(Usuario: Usuario): DocumentData;
    fromFirestore(snapshot: QueryDocumentSnapshot<DocumentData>): Usuario;
};
export { Usuario, usuarioConverter };
