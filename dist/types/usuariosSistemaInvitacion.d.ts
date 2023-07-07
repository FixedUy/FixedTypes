interface UsuarioSistemaInvitacion {
    id: string;
    mail: string;
    nombre: string;
    vendedor: boolean;
    enviadaPorNombre: string;
    enviadaPorMail: string;
    enviadaEl: number | null;
    enviadaElString: string;
}
declare const usuarioSistemaInvitacionConverter: {
    toFirestore(Usuario: UsuarioSistemaInvitacion): {
        nombre: string;
    };
    fromFirestore(snapshot: any): UsuarioSistemaInvitacion;
};
export { type UsuarioSistemaInvitacion, usuarioSistemaInvitacionConverter };
