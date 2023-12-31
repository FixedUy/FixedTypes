import { MecanismosEnvioMails } from "./mecanismosEnvioMails";
interface UsuarioEmpresas {
    id: string;
    nombreComercial: string;
    rut: string;
    razonSocial: string;
    logoURL: string;
    mecanismosEnvioMails: MecanismosEnvioMails[];
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
    rolId: string;
    menuCollapsed: boolean;
    googleApi: boolean;
    googleApiEmpresasHabilitadas: string[];
}
declare const usuarioConverter: {
    toFirestore(usuario: Usuario): Usuario;
    fromFirestore(snapshot: any): Usuario;
};
export { type Usuario, type UsuarioEmpresas, usuarioConverter };
