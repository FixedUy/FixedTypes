"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComprasFacturasDevueltaCantidadConverter = void 0;
const ComprasFacturasDevueltaCantidadConverter = {
    toFirestore(comprasFacturasDevueltaCantidad) {
        return comprasFacturasDevueltaCantidad;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            idDocumento: data.idDocumento,
            idCompra: data.idCompra,
            lineasCompra: data.lineasCompra
        };
    }
};
exports.ComprasFacturasDevueltaCantidadConverter = ComprasFacturasDevueltaCantidadConverter;
