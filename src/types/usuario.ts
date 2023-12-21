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
  rolId: string;
  menuCollapsed: boolean;
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
      rolId: data.rolId,
      ultimaEdicion: data.ultimaEdicion,
      menuCollapsed: data.menuCollapsed
    };
  }
};

export {type Usuario, type UsuarioEmpresas, usuarioConverter};
