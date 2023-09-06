"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cotizacionesConverter = void 0;
const cotizacionesConverter = {
    toFirestore(cotizacion) {
        return cotizacion;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            fecha: data.fecha,
            cotizaciones: data.cotizaciones
        };
    }
};
exports.cotizacionesConverter = cotizacionesConverter;
