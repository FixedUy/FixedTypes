"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiciosListasPrecioConverter = exports.ServiciosListasPrecio = void 0;
const lodash_1 = require("lodash");
class ServiciosListasPrecio {
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
exports.ServiciosListasPrecio = ServiciosListasPrecio;
const ServiciosListasPrecioConverter = {
    toFirestore(servicioListaPrecio) {
        return {};
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        const locales = [];
        if (data.locales != undefined &&
            data.locales != null &&
            (0, lodash_1.isArray)(data.locales)) {
            data.locales.map((e) => {
                locales.push(e);
            });
        }
        return new ServiciosListasPrecio(data.version, snapshot.id, data.nombre, locales, data.clonarId, data.activo, data.ultimaEdicion);
    },
};
exports.ServiciosListasPrecioConverter = ServiciosListasPrecioConverter;
