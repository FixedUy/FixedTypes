import { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
declare class UsuarioSistemaInvitacion {
    id: string;
    mail: string;
    nombre: string;
    vendedor: boolean;
    enviadaPorNombre: string;
    enviadaPorMail: string;
    enviadaEl: number | null;
    enviadaElString: string;
    constructor(id: string, mail: string, nombre: string, vendedor: boolean, enviadaPorNombre: string, enviadaPorMail: string, fechaTimestamp: number | null);
}
declare const usuarioSistemaInvitacionConverter: {
    toFirestore(Usuario: UsuarioSistemaInvitacion): DocumentData;
    fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): UsuarioSistemaInvitacion;
};
export { UsuarioSistemaInvitacion, usuarioSistemaInvitacionConverter };
