"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VentasFacturasDevueltaCantidadConverter = void 0;
const VentasFacturasDevueltaCantidadConverter = {
    toFirestore(ventasFacturasDevueltaCantidad) {
        return ventasFacturasDevueltaCantidad;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            idDocumento: data.idDocumento,
            idVenta: data.idVenta,
            lineasVenta: data.lineasVenta
        };
    }
};
exports.VentasFacturasDevueltaCantidadConverter = VentasFacturasDevueltaCantidadConverter;
