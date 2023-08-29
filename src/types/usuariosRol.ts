/*
cada módulo en el sistema tendrá una letra, que será la primera
de la opción, y la segunda la acción a realizar

Letras acción a realizar:
c - crear
l - listar

Letras módulos:
v - ventas
s - servicios
p - productos
q - rubros de productos/servicios
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
x - documentos
z - boleta compra
d - remitos
f - resguardos
g - Exportador personalizado
h - Stock
j - Importador
k - Listas de precio productos/servicios
t - Caja
u - CFE Recibidos
*/

export enum Permisos {
  ListarVentas = "vl",
  CrearVentas = "vc",
  ExportarVentas = "ve",
  CrearServicios = "sc",
  ListarServicios = "sl",
  CrearRubros = "qc",
  CrearProductos = "pc",
  ListarProductos = "pl",
  ListarCompras = "cl",
  CrearCompras = "cc",
  ExportarCompras = "ce",
  CrearComprasRubros = "bc",
  ListarClientes = "ll",
  CrearClientes = "lc",
  ExportarClientes = "le",
  ListarProveedores = "rl",
  CrearProveedores = "rc",
  ExportarProveedores = "re",
  ListarRecibosClientes = "il",
  CrearRecibosClientes = "ic",
  ExportarRecibosClientes = "ie",
  ListarRecibosProveedores = "el",
  CrearRecibosProveedores = "ec",
  ExportarRecibosProveedores = "ee",
  CambiarCotizacion = "o",
  ListarCuentasCorrientesClientes = "ul",
  ExportarCuentasCorrientesClientes = "ue",
  AjustarCuentasCorrientesClientes = "ua",
  ListarCuentasCorrientesProveedores = "nl",
  ExportarCuentasCorrientesProveedores = "ne",
  AjustarCuentasCorrientesProveedores = "na",
  Estadisticas = "a",
  ListarCentroCostos = "wl",
  CrearCentroCostos = "wc",
  ListarDocumentos = "xl",
  AfectarDocumentos = "xa",
  ListarBoletaCompra = "zl",
  CrearBoletaCompra = "zc",
  ListarRemitos = "dl",
  CrearRemitosIngreso = "di",
  CrearRemitosTransferencia = "dt",
  CrearRemitosSalida = "ds",
  ListarResguardos = "fl",
  CrearResguardos = "fc",
  ExportadorPersonalizado = "g",
  ListarStock = "hl",
  ExportarStock = "he",
  AjustarStock = "ha",
  Importador = "j",
  ListarListasPrecio = "kl",
  CrearListasPrecio = "kc",
  Caja = "t",
  ListarCFERecibidos = "u"
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
