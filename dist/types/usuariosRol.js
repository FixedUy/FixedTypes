"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioRolConverter = exports.Permisos = void 0;
var Permisos;
(function (Permisos) {
    Permisos["CrearVenta"] = "vc";
    Permisos["ListarVentas"] = "vl";
    Permisos["ExportarVentas"] = "ve";
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
