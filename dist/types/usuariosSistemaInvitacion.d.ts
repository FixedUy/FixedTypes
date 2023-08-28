interface UsuarioSistemaInvitacion {
    id: string;
    mail: string;
    nombre: string;
    vendedor: boolean;
    enviadaPorNombre: string;
    enviadaPorMail: string;
    enviadaEl: number | null;
    enviadaElString: string;
    empresaLogoURL: string;
    empresaNombreComercial: string;
    empresaRazonSocial: string;
    empresaRUT: string;
    empresaId: string;
    rolId: string;
    rolNombre: string;
}
declare const usuarioSistemaInvitacionConverter: {
    toFirestore(usuarioInvitacion: UsuarioSistemaInvitacion): UsuarioSistemaInvitacion;
    fromFirestore(snapshot: any): UsuarioSistemaInvitacion;
};
export { type UsuarioSistemaInvitacion, usuarioSistemaInvitacionConverter };
