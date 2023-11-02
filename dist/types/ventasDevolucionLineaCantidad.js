"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VentasDevolucionLineaCantidadConverter = void 0;
const VentasDevolucionLineaCantidadConverter = {
    toFirestore(ventasDevolucionLineaCantidad) {
        return ventasDevolucionLineaCantidad;
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
            idServicio: data.idServicio,
            nroLinea: data.nroLinea
        };
    }
};
exports.VentasDevolucionLineaCantidadConverter = VentasDevolucionLineaCantidadConverter;
