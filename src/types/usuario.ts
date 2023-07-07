import {Empresa} from "./empresa";

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

const usuarioConverter = {
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
      data.empresas.map(e => {
        empresas.push({
          id: e["id"],
          nombreComercial: e["nombreComercial"],
          rut: e["rut"],
          razonSocial: e["razonSocial"],
          logoURL: e["logoURL"]
        });
      });
    }

    return {
      id: snapshot.id,
      nombre: data.nombre,
      mail: data.mail,
      creadoEl: data.creadoEl,
      creadoElString: data.creadoElString,
      empresas: empresas,
      vendedor: data.vendedor,
      activo: data.activo,
      ultimaEdicion: data.ultimaEdicion
    };
  }
};

export {type Usuario, usuarioConverter};
