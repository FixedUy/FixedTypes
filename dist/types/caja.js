"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cajaConverter = void 0;
const cajaConverter = {
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
            puedenAceptarDepositos: data.puedenAceptarDepositos,
            mediosCobro: data.mediosCobro,
            mediosPago: data.mediosPago,
            saldoMonedas: data.saldoMonedas,
            saldoMedios: data.saldoMedios,
            depositosPendientes: data.depositosPendientes,
            depositosPendientesImportes: data.depositosPendientesImportes,
            depositosPendientesAceptar: data.depositosPendientesAceptar,
            depositosPendientesAceptarImportes: data.depositosPendientesAceptarImportes,
            locales: data.locales,
            admiteDepositos: data.admiteDepositos,
            ultimaEdicion: data.ultimaEdicion,
            activo: data.activo
        };
    }
};
exports.cajaConverter = cajaConverter;
