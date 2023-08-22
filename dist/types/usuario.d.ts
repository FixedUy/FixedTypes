import { Permisos } from "./usuariosRol";
interface UsuarioEmpresas {
    id: string;
    nombreComercial: string;
    rut: string;
    razonSocial: string;
    logoURL: string;
}
interface Usuario {
    id: string;
    nombre: string;
    mail: string;
    creadoEl: number;
    creadoElString: string;
    empresas: UsuarioEmpresas[];
    vendedor: boolean;
    activo: boolean;
    ultimaEdicion: number;
    rol: string;
    permisos: Permisos[];
}
declare const usuarioConverter: {
    toFirestore(usuario: Usuario): Usuario;
    fromFirestore(snapshot: any): Usuario;
};
export { type Usuario, type UsuarioEmpresas, usuarioConverter };
