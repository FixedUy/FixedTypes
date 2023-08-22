/*
cada módulo en el sistema tendrá una letra, que será la primera
de la opción, y la segunda la acción a realizar

Letras acción a realizar:
c - crear
l - listar

Letras módulos:
v - ventas
c - compras
l - clientes
p - proveedores
r - recibos clientes
e - recibos proveedores
*/

export enum Permisos {
  CrearVenta = "vc",
  ListarVentas = "vl",
  ExportarVentas = "ve"
}

interface UsuarioRol {
  id: string;
  rol: string;
  permisos: Permisos[];
}

const usuarioRolConverter = {
  toFirestore(rol: UsuarioRol) {
    return rol;
  },
  fromFirestore(snapshot: any): UsuarioRol {
    const data = snapshot.data()!;

    return {
      id: snapshot.id,
      rol: data.rol,
      permisos: data.permisos
    };
  }
};

export {type UsuarioRol, usuarioRolConverter};
