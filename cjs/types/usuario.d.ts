import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import { Empresa } from "./empresa";
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
interface CustomQueryDocumentSnapshot<T> extends QueryDocumentSnapshot<T> {
    get metadata(): any;
}
declare const usuarioConverter: {
    toFirestore(Usuario: Usuario): DocumentData;
    fromFirestore(snapshot: CustomQueryDocumentSnapshot<DocumentData>): Usuario;
};
export { Usuario, usuarioConverter };
