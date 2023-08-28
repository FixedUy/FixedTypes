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

const usuarioSistemaInvitacionConverter = {
  toFirestore(usuarioInvitacion: UsuarioSistemaInvitacion) {
    return usuarioInvitacion;
  },
  fromFirestore(snapshot: any): UsuarioSistemaInvitacion {
    const data = snapshot.data()!;
    return {
      id: snapshot.id,
      mail: data.mail,
      nombre: data.nombre,
      vendedor: data.vendedor,
      empresaLogoURL: data.empresaLogoURL,
      empresaNombreComercial: data.empresaNombreComercial,
      empresaRazonSocial: data.empresaRazonSocial,
      empresaRUT: data.empresaRUT,
      empresaId: data.empresaId,
      enviadaPorNombre: data.enviadaPorNombre,
      enviadaPorMail: data.enviadaPorMail,
      enviadaEl: data.enviadaEl?.seconds,
      enviadaElString: data.enviadaElString,
      rolId: data.rolId,
      rolNombre: data.rolNombre
    };
  }
};

export {type UsuarioSistemaInvitacion, usuarioSistemaInvitacionConverter};
