import { DocumentData, QueryDocumentSnapshot, SnapshotMetadata } from "firebase/firestore";
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
declare class CustomQueryDocumentSnapshot<T> {
    private snapshot;
    constructor(snapshot: QueryDocumentSnapshot<T>);
    get id(): string;
    get ref(): import("firebase/firestore").DocumentReference<T>;
    get exists(): () => this is QueryDocumentSnapshot<T>;
    get customMetadata(): SnapshotMetadata;
    get customData(): T | undefined;
}
declare const usuarioConverter: {
    toFirestore(Usuario: Usuario): DocumentData;
    fromFirestore(snapshot: CustomQueryDocumentSnapshot<DocumentData>): Usuario;
};
export { Usuario, usuarioConverter };
