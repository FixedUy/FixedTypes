"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.centroCostosConverter = exports.CentroCostos = void 0;
class CentroCostos {
    constructor(id, nombre, valorExportacion, superior) {
        this.id = id;
        this.nombre = nombre;
        this.valorExportacion = valorExportacion;
        this.superior = superior;
    }
}
exports.CentroCostos = CentroCostos;
const centroCostosConverter = {
    toFirestore(centroCostos) {
        return {};
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return new CentroCostos(snapshot.id, data.nombre, data.valorExportacion, data.superior);
    },
};
exports.centroCostosConverter = centroCostosConverter;
