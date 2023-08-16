"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productoConverter = void 0;
const productoConverter = {
    toFirestore(producto) {
        return producto;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            version: data.version,
            id: snapshot.id,
            codigo: data.codigo,
            nombre: data.nombre,
            rubroId: data.rubroId,
            listaPrecio: data.listaPrecio,
            unidad: data.unidad,
            activo: data.activo,
            campoExtra: data.campoExtra,
            stock: data.stock
        };
    }
};
exports.productoConverter = productoConverter;
