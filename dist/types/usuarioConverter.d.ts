import { Usuario } from './usuario';
export declare const usuarioConverter: {
    toFirestore(Usuario: Usuario): {
        nombre: string;
    };
    fromFirestore(snapshot: any): Usuario;
};
