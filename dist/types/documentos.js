"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentoConverter = void 0;
const DocumentoConverter = {
    toFirestore(documento) {
        return documento;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            version: data.version,
            id: snapshot.id,
            tipoDocumento: data.tipoDocumento,
            documentoId: data.documentoId,
            fechaComprobante: data.fechaComprobante,
            fechaComprobanteString: data.fechaComprobanteString,
            fechaCreacion: data.fechaCreacion,
            comprobante: data.comprobante,
            entidadId: data.entidadId,
            entidadNombre: data.entidadNombre,
            cancelado: data.cancelado,
            cancelo: data.cancelo,
            pendienteCancelarCantidad: data.pendienteCancelarCantidad,
            disponibleCancelarCantidad: data.disponibleCancelarCantidad,
            pendienteCancelarImporte: data.pendienteCancelarImporte,
            disponibleCancelarImporte: data.disponibleCancelarImporte,
            importe: data.importe,
            importePendiente: data.importePendiente,
            importeDisponible: data.importeDisponible,
            canceladoPor: data.canceladoPor,
            cancela: data.cancela,
            tipoCancelacionRecibida: data.tipoCancelacionRecibida,
            tipoCancelacionRealizada: data.tipoCancelacionRealizada,
            relacionCancelacionesRealizada: data.relacionCancelacionesRealizada,
            relacionCancelacionesRecibida: data.relacionCancelacionesRecibida
        };
    }
};
exports.DocumentoConverter = DocumentoConverter;
