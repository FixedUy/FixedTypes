"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviciosListasPrecioConverter = void 0;
const serviciosListasPrecioConverter = {
    toFirestore(servicioListaPrecio) {
        return servicioListaPrecio;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            version: data.version,
            id: snapshot.id,
            nombre: data.nombre,
            locales: data.locales,
            clonarId: data.clonarId,
            activo: data.activo,
            ultimaEdicion: data.ultimaEdicion
        };
    }
};
exports.serviciosListasPrecioConverter = serviciosListasPrecioConverter;
