"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productosListasPrecioConverter = void 0;
const productosListasPrecioConverter = {
    toFirestore(productoListaPrecio) {
        return productoListaPrecio;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            version: data.version,
            id: snapshot.id,
            nombre: data.nombre,
            locales: data.locales,
            // locales: locales,
            clonarId: data.clonarId,
            activo: data.activo,
            ultimaEdicion: data.ultimaEdicion
        };
    }
};
exports.productosListasPrecioConverter = productosListasPrecioConverter;
