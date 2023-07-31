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
}

const usuarioSistemaInvitacionConverter = {
  toFirestore(Usuario: UsuarioSistemaInvitacion) {
    return {nombre: Usuario.nombre};
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
      enviadaElString: data.enviadaElString
    };
  }
};

export {type UsuarioSistemaInvitacion, usuarioSistemaInvitacionConverter};
