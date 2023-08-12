"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pagoEnPlazosConverter = void 0;
const pagoEnPlazosConverter = {
    toFirestore(plazo) {
        return plazo;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            id: snapshot.id,
            nombre: data.nombre,
            cantDias: data.cantDias,
            activo: data.activo,
            ultimaEdicion: data.ultimaEdicion
        };
    }
};
exports.pagoEnPlazosConverter = pagoEnPlazosConverter;
