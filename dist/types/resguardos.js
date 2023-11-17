"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resguardosConverter = void 0;
const resguardosConverter = {
    toFirestore(resguardos) {
        return resguardos;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            id: snapshot.id,
            emisorId: data.emisorId,
            localId: data.localId,
            fecha: data.fecha,
            fechaString: data.fechaString,
            receptorId: data.receptorId,
            receptorString: data.receptorString,
            moneda: data.moneda,
            retenciones: data.retenciones,
            referencias: data.referencias,
            observaciones: data.observaciones,
            valor: data.valor,
            cfe: data.cfe
        };
    }
};
exports.resguardosConverter = resguardosConverter;
