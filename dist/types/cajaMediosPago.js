"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cajaMediosPagoConverter = void 0;
const cajaMediosPagoConverter = {
    toFirestore(mediosPago) {
        return mediosPago;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            version: data.version,
            id: snapshot.id,
            nombre: data.nombre,
            requiereVencimiento: data.requiereVencimiento,
            camposExtra: data.camposExtra,
            // camposExtra: campoExtraMediosPago,
            activo: data.activo,
            ultimaEdicion: data.ultimaEdicion
        };
    }
};
exports.cajaMediosPagoConverter = cajaMediosPagoConverter;
