"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productosListasPrecioConverter = void 0;
const lodash_1 = require("lodash");
const productosListasPrecioConverter = {
    toFirestore(productoListaPrecio) {
        return {};
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        const locales = [];
        if (data.locales != undefined &&
            data.locales != null &&
            (0, lodash_1.isArray)(data.locales)) {
            data.locales.map(e => {
                locales.push(e);
            });
        }
        return {
            version: data.version,
            id: snapshot.id,
            nombre: data.nombre,
            locales: locales,
            clonarId: data.clonarId,
            activo: data.activo,
            ultimaEdicion: data.ultimaEdicion
        };
    }
};
exports.productosListasPrecioConverter = productosListasPrecioConverter;
