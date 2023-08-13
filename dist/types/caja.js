"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CajaConverter = void 0;
const CajaConverter = {
    toFirestore(caja) {
        return caja;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            version: data.version,
            id: snapshot.id,
            nombre: data.nombre,
            puedenRetirar: data.puedenRetirar,
            saldoMonedas: data.saldoMonedas,
            saldoMedios: data.saldoMedios,
            locales: data.locales,
            ultimaEdicion: data.ultimaEdicion,
            activo: data.activo
        };
    }
};
exports.CajaConverter = CajaConverter;
