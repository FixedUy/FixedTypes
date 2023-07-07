"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosListasPrecioConverter = exports.ProductosListasPrecio = void 0;
const lodash_1 = require("lodash");
class ProductosListasPrecio {
    constructor(version, id, nombre, locales, clonarId, activo, ultimaEdicion) {
        this.version = version;
        this.id = id;
        this.nombre = nombre;
        this.locales = locales;
        this.clonarId = clonarId;
        this.activo = activo;
        this.ultimaEdicion = ultimaEdicion;
    }
}
exports.ProductosListasPrecio = ProductosListasPrecio;
const ProductosListasPrecioConverter = {
    toFirestore(productoListaPrecio) {
        return {};
    },
    fromFirestore(snapshot, options) {
        const data = snapshot.data(options);
        const locales = [];
        if (data.locales != undefined &&
            data.locales != null &&
            (0, lodash_1.isArray)(data.locales)) {
            data.locales.map(e => {
                locales.push(e);
            });
        }
        return new ProductosListasPrecio(data.version, snapshot.id, data.nombre, locales, data.clonarId, data.activo, data.ultimaEdicion);
    }
};
exports.ProductosListasPrecioConverter = ProductosListasPrecioConverter;
