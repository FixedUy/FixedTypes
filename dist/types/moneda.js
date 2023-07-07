"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monedaConverter = void 0;
const monedaConverter = {
    toFirestore(moneda) {
        return {};
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            id: snapshot.id,
            nombre: data.nombre,
            simbolo: data.simbolo,
            codigoBcu: data.codigoBcu,
            codigoIso: data.codigoIso,
            numeroIso: data.numeroIso,
            activo: data.activo,
            ultimaEdicion: data.ultimaEdicion
        };
    }
};
exports.monedaConverter = monedaConverter;
