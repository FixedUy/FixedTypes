"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cotizacionConverter = void 0;
const cotizacionConverter = {
    toFirestore(cotizacion) {
        return cotizacion;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            codigoBcu: data.codigoBcu,
            cotizacion: data.cotizacion
        };
    }
};
exports.cotizacionConverter = cotizacionConverter;
