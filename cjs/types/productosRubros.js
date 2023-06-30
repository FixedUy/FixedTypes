"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosRubroConverter = exports.ProductosRubro = void 0;
class ProductosRubro {
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
exports.ProductosRubro = ProductosRubro;
const ProductosRubroConverter = {
    toFirestore(servicioRubros) {
        return {};
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return new ProductosRubro(data.version, snapshot.id, data.codigo, data.nombre, data.padreId, data.nombreCompleto, data.activo, data.esHoja, data.ultimaEdicion);
    },
};
exports.ProductosRubroConverter = ProductosRubroConverter;
