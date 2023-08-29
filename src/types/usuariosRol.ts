/*
cada módulo en el sistema tendrá una letra, que será la primera
de la opción, y la segunda la acción a realizar

Letras acción a realizar:
c - crear
l - listar

Letras módulos:
v - ventas
s - servicios
t - servicios rubros
p - productos
q - productos rubros
c - compras
b - compras rubros
l - clientes
r - proveedores
i - recibos clientes
e - recibos proveedores
o - cotizacion
u - cuentas corrientes clientes
n - cuentas corrientes proveedores
a - estadisticas
w - centro de costos

*/

export enum Permisos {
  ListarVentas = "vl",
  ExportarVentas = "ve",
  CrearProductos = "pc",
  ListarProductos = "pl",
  CrearCategoriaProductos = "ql",
  CrearServicios = "sc",
  ListarServicios = "sl",
  CrearCategoriaServicios = "qt"
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
