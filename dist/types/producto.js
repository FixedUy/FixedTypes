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
            tipo: "producto",
            id: snapshot.id,
            codigo: data.codigo,
            todosLosCodigos: data.todosLosCodigos,
            nombre: data.nombre,
            rubroId: data.rubroId,
            listaPrecio: data.listaPrecio,
            unidad: data.unidad,
            activo: data.activo,
            campoExtra: data.campoExtra,
            buscablePor: data.buscablePor,
            stock: data.stock,
            cantidadDecimales: data.cantidadDecimales
        };
    }
};
exports.productoConverter = productoConverter;
