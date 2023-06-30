"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnidadConverter = exports.Unidad = void 0;
class Unidad {
    constructor(version, id, nombre, activo, ultimaEdicion) {
        this.version = version;
        this.id = id;
        this.nombre = nombre;
        this.activo = activo;
        this.ultimaEdicion = ultimaEdicion;
    }
}
exports.Unidad = Unidad;
const UnidadConverter = {
    toFirestore(unidad) {
        return {};
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return new Unidad(data.version, snapshot.id, data.nombre, data.activo, data.ultimaEdicion);
    },
};
exports.UnidadConverter = UnidadConverter;
