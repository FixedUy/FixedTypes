"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnidadConverter = void 0;
const UnidadConverter = {
    toFirestore(unidad) {
        return {};
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            version: data.version,
            id: snapshot.id,
            nombre: data.nombre,
            activo: data.activo,
            ultimaEdicion: data.ultimaEdicion
        };
    }
};
exports.UnidadConverter = UnidadConverter;
