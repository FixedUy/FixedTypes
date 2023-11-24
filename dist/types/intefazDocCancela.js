"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterfazDocCancelaConverter = void 0;
const InterfazDocCancelaConverter = {
    toFirestore(interfazDocCancela) {
        return interfazDocCancela;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            cancelante: data.cancelante,
            cancelado: data.cancelado,
            nroLineaCancelante: data.nroLineaCancelante,
            nroLineaCancelado: data.nroLineaCancelado,
            cantidad: data.cantidad,
            importe: data.importe
        };
    }
};
exports.InterfazDocCancelaConverter = InterfazDocCancelaConverter;
