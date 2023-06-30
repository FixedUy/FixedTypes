"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasaConverter = exports.TasaIVA = void 0;
class TasaIVA {
    constructor(id, nombre, sigla, valor, cfeDgi, activoProductos, activoServicios, ultimaEdicion) {
        this.id = id;
        this.nombre = nombre;
        this.sigla = sigla;
        this.valor = valor;
        this.cfeDgi = cfeDgi;
        this.activoProductos = activoProductos;
        this.activoServicios = activoServicios;
        this.ultimaEdicion = ultimaEdicion;
    }
}
exports.TasaIVA = TasaIVA;
const tasaConverter = {
    toFirestore(tasa) {
        return {};
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return new TasaIVA(snapshot.id, data.nombre, data.sigla, data.valor, data.cfeDgi, data.activoProductos, data.activoServicios, data.ultimaEdicion);
    },
};
exports.tasaConverter = tasaConverter;
