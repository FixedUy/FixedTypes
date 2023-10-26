"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioRolConverter = exports.Permisos = void 0;
var Permisos;
(function (Permisos) {
    Permisos["ListarVentas"] = "vl";
    Permisos["CrearVentas"] = "vc";
    Permisos["ExportarVentas"] = "ve";
    Permisos["CrearServicios"] = "sc";
    Permisos["ListarServicios"] = "sl";
    Permisos["CrearRubros"] = "qc";
    Permisos["CrearProductos"] = "pc";
    Permisos["ListarProductos"] = "pl";
    Permisos["ListarCompras"] = "cl";
    Permisos["CrearCompras"] = "cc";
    Permisos["ExportarCompras"] = "ce";
    Permisos["CrearComprasRubros"] = "bc";
    Permisos["ListarClientes"] = "ll";
    Permisos["CrearClientes"] = "lc";
    Permisos["ExportarClientes"] = "le";
    Permisos["ListarProveedores"] = "rl";
    Permisos["CrearProveedores"] = "rc";
    Permisos["ExportarProveedores"] = "re";
    Permisos["ListarRecibosClientes"] = "il";
    Permisos["CrearRecibosClientes"] = "ic";
    Permisos["ExportarRecibosClientes"] = "ie";
    Permisos["ListarRecibosProveedores"] = "el";
    Permisos["CrearRecibosProveedores"] = "ec";
    Permisos["ExportarRecibosProveedores"] = "ee";
    Permisos["CambiarCotizacion"] = "o";
    Permisos["ListarCuentasCorrientesClientes"] = "ul";
    Permisos["ExportarCuentasCorrientesClientes"] = "ue";
    Permisos["AjustarCuentasCorrientesClientes"] = "ua";
    Permisos["ListarCuentasCorrientesProveedores"] = "nl";
    Permisos["ExportarCuentasCorrientesProveedores"] = "ne";
    Permisos["AjustarCuentasCorrientesProveedores"] = "na";
    Permisos["Estadisticas"] = "a";
    Permisos["ListarCentroCostos"] = "wl";
    Permisos["CrearCentroCostos"] = "wc";
    Permisos["ListarDocumentos"] = "xl";
    Permisos["AfectarDocumentos"] = "xa";
    Permisos["ListarBoletaCompra"] = "zl";
    Permisos["CrearBoletaCompra"] = "zc";
    Permisos["ListarRemitos"] = "dl";
    Permisos["CrearRemitosIngreso"] = "di";
    Permisos["CrearRemitosTransferencia"] = "dt";
    Permisos["CrearRemitosSalida"] = "ds";
    Permisos["ListarResguardos"] = "fl";
    Permisos["CrearResguardos"] = "fc";
    Permisos["ExportadorPersonalizado"] = "g";
    Permisos["ListarStock"] = "hl";
    Permisos["ExportarStock"] = "he";
    Permisos["AjustarStock"] = "ha";
    Permisos["Importador"] = "j";
    Permisos["ListarListasPrecio"] = "kl";
    Permisos["CrearListasPrecio"] = "kc";
    Permisos["Caja"] = "t";
    Permisos["ListarCFERecibidos"] = "u";
})(Permisos || (exports.Permisos = Permisos = {}));
const usuarioRolConverter = {
    toFirestore(rol) {
        return rol;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            id: snapshot.id,
            rol: data.rol,
            permisos: data.permisos
        };
    }
};
exports.usuarioRolConverter = usuarioRolConverter;
