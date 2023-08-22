"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormasDePagoPlazosConverter = void 0;
const FormasDePagoPlazosConverter = {
    toFirestore(plazo) {
        return {};
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
exports.FormasDePagoPlazosConverter = FormasDePagoPlazosConverter;
