"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiciosRubroConverter = exports.ServiciosRubro = void 0;
class ServiciosRubro {
    constructor(version, id, codigo, nombre, padreId, nombreCompleto, activo, esHoja, ultimaEdicion) {
        this.version = version;
        this.id = id;
        this.codigo = codigo;
        this.nombre = nombre;
        this.padreId = padreId;
        this.nombreCompleto = nombreCompleto;
        this.activo = activo;
        this.esHoja = esHoja;
        this.ultimaEdicion = ultimaEdicion;
    }
}
exports.ServiciosRubro = ServiciosRubro;
const ServiciosRubroConverter = {
    toFirestore(servicioRubros) {
        return {};
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return new ServiciosRubro(data.version, snapshot.id, data.codigo, data.nombre, data.padreId, data.nombreCompleto, data.activo, data.esHoja, data.ultimaEdicion);
    },
};
exports.ServiciosRubroConverter = ServiciosRubroConverter;
