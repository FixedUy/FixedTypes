import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
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
type QueryDocumentSnapshot = firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>;
declare const usuarioConverter: {
    toFirestore(Usuario: Usuario): firebase.firestore.DocumentData;
    fromFirestore(snapshot: QueryDocumentSnapshot): Usuario;
};
export { Usuario, usuarioConverter };
