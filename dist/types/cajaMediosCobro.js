"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cajaMediosCobroConverter = void 0;
const cajaMediosCobroConverter = {
    toFirestore(mediosCobro) {
        return mediosCobro;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            version: data.version,
            id: snapshot.id,
            nombre: data.nombre,
            requiereVencimiento: data.requiereVencimiento,
            camposExtra: data.camposExtra,
            activo: data.activo,
            ultimaEdicion: data.ultimaEdicion
        };
    }
};
exports.cajaMediosCobroConverter = cajaMediosCobroConverter;
