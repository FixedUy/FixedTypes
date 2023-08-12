"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.centroCostosConverter = void 0;
const centroCostosConverter = {
    toFirestore(centroCostos) {
        return centroCostos;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            id: snapshot.id,
            nombre: data.nombre,
            valorExportacion: data.valorExportacion,
            activo: data.activo,
            ultimaEdicion: data.ultimaEdicion
        };
    }
};
exports.centroCostosConverter = centroCostosConverter;
