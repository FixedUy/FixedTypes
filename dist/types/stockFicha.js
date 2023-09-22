"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stockFichaConverter = void 0;
const stockFichaConverter = {
    toFirestore(stockFicha) {
        return stockFicha;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            version: data.version,
            id: snapshot.id,
            documentoCreador: data.documentoCreador,
            documentoCreadorId: data.documentoCreadorId,
            fecha: data.fecha,
            cantidad: data.cantidad,
            lotesQuitados: data.lotesQuitados,
            usuarioId: data.usuarioId,
            localId: data.localId,
            esIngreso: data.esIngreso
        };
    }
};
exports.stockFichaConverter = stockFichaConverter;
