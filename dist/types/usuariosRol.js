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
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioRolConverter = exports.Permisos = void 0;
var Permisos;
(function (Permisos) {
    Permisos["ListarVentas"] = "vl";
    Permisos["ExportarVentas"] = "ve";
    Permisos["CrearProductos"] = "pc";
    Permisos["ListarProductos"] = "pl";
    Permisos["CrearCategoriaProductos"] = "ql";
    Permisos["CrearServicios"] = "sc";
    Permisos["ListarServicios"] = "sl";
    Permisos["CrearCategoriaServicios"] = "qt";
})(Permisos = exports.Permisos || (exports.Permisos = {}));
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
