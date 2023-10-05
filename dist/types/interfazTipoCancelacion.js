"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterfazTipoCancelacionConverter = void 0;
const InterfazTipoCancelacionConverter = {
    toFirestore(documento) {
        return documento;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            documentoId: data.documentoId,
            tipoCancelacion: data.tipoCancelacion
        };
    }
};
exports.InterfazTipoCancelacionConverter = InterfazTipoCancelacionConverter;
