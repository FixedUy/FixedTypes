import { Usuario } from './usuario'
import { Empresa } from './empresa'

export const usuarioConverter = {
  toFirestore(Usuario: Usuario) {
    return {nombre: Usuario.nombre};
  },
  fromFirestore(snapshot: any): Usuario {
    const data = snapshot.data()!;
    const empresas: Empresa[] = [];
    if (
      data.empresas != undefined &&
      data.empresas != null &&
      Array.isArray(data.empresas)
    ) {
      data.empresas.map((e: any) => {
        empresas.push(
          new Empresa(
            e["id"],
            e["nombreComercial"],
            e["rut"],
            e["razonSocial"],
            e["logoURL"]
          )
        );
      });
    }

    return new Usuario(
      snapshot.id,
      data.nombre,
      data.mail,
      data.creadoEl,
      empresas,
      data.vendedor,
      data.activo,
      data.ultimaEdicion
    );
  }
};
