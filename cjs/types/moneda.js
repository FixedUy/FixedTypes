"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monedaConverter = exports.Moneda = void 0;
class Moneda {
    constructor(id, nombre, simbolo, codigoBcu, codigoIso, numeroIso, activo, ultimaEdicion) {
        this.id = id;
        this.nombre = nombre;
        this.simbolo = simbolo;
        this.codigoBcu = codigoBcu;
        this.codigoIso = codigoIso;
        this.numeroIso = numeroIso;
        this.activo = activo;
        this.ultimaEdicion = ultimaEdicion;
    }
}
exports.Moneda = Moneda;
const monedaConverter = {
    toFirestore(moneda) {
        return {};
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return new Moneda(snapshot.id, data.nombre, data.simbolo, data.codigoBcu, data.codigoIso, data.numeroIso, data.activo, data.ultimaEdicion);
    },
};
exports.monedaConverter = monedaConverter;
