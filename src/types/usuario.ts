import {Permisos} from "./usuariosRol";

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

const usuarioConverter = {
  toFirestore(usuario: Usuario) {
    return usuario;
  },
  fromFirestore(snapshot: any): Usuario {
    const data = snapshot.data()!;

    return {
      id: snapshot.id,
      nombre: data.nombre,
      mail: data.mail,
      creadoEl: data.creadoEl,
      creadoElString: data.creadoElString,
      empresas: data.empresas,
      vendedor: data.vendedor,
      activo: data.activo,
      permisos: data.permisos,
      rol: data.rol,
      ultimaEdicion: data.ultimaEdicion
    };
  }
};

export {type Usuario, type UsuarioEmpresas, usuarioConverter};
