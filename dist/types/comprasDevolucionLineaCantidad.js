"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComprasDevolucionLineaCantidadConverter = void 0;
const ComprasDevolucionLineaCantidadConverter = {
    toFirestore(comprasDevolucionLineaCantidad) {
        return comprasDevolucionLineaCantidad;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            cantidadPendiente: data.cantidadPendiente,
            cantidadDevolver: data.cantidadDevolver,
            descripcion: data.descripcion,
            rubro: data.rubro,
            centroCosto: data.centroCosto,
            tasaIva: data.tasaIva,
            montoBruto: data.montoBruto,
            precio: data.precio,
            importe: data.importe,
            stock: data.stock,
            idProducto: data.idProducto,
            nroLinea: data.nroLinea
        };
    }
};
exports.ComprasDevolucionLineaCantidadConverter = ComprasDevolucionLineaCantidadConverter;
