"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productosListasPrecioConverter = void 0;
const productosListasPrecioConverter = {
    toFirestore(productoListaPrecio) {
        return productoListaPrecio;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        // const locales: string[] = [];
        // if (
        //   data.locales != undefined &&
        //   data.locales != null &&
        //   isArray(data.locales)
        // ) {
        //   data.locales.map(e => {
        //     locales.push(e);
        //   });
        // }
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
