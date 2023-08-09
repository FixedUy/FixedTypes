"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CajaConverter = void 0;
const CajaConverter = {
    toFirestore(compra) {
        return {};
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            version: data.version,
            id: snapshot.id,
            nombre: data.nombre,
            saldoMonedas: data.saldoMonedas,
            saldoMedios: data.saldoMedios,
            locales: data.locales,
            activo: data.activo
        };
    }
};
exports.CajaConverter = CajaConverter;
