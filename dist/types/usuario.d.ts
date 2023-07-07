import { Empresa } from "./empresa";
interface Usuario {
    id: string;
    nombre: string;
    mail: string;
    creadoEl: number;
    creadoElString: string;
    empresas: Empresa[];
    vendedor: boolean;
    activo: boolean;
    ultimaEdicion: number;
}
declare const usuarioConverter: {
    toFirestore(Usuario: Usuario): {
        nombre: string;
    };
    fromFirestore(snapshot: any): Usuario;
};
export { type Usuario, usuarioConverter };
