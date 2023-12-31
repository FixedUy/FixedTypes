"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productoSerialesConverter = void 0;
const productoSerialesConverter = {
    toFirestore(producto) {
        return producto;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            version: data.version,
            id: snapshot.id,
            productoId: data.productoId,
            serial: data.serial,
            localActual: data.localActual,
            fechaIngreso: data.fechaIngreso,
            fechaIngresoString: data.fechaIngresoString,
            fechaSalida: data.fechaSalida,
            fechaSalidaString: data.fechaSalidaString,
            loteId: data.loteId
        };
    }
};
exports.productoSerialesConverter = productoSerialesConverter;
