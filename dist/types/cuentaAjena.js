"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cuentaAjenaConverter = void 0;
const cuentaAjenaConverter = {
    toFirestore(cuenta) {
        return cuenta;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            id: snapshot.id,
            nombreFantasia: data.nombrenombreFantasia,
            tipoDocumento: data.tipoDocumento,
            documento: data.documento,
            razonSocial: data.razonSocial,
            pais: data.pais,
            activo: data.activo,
            ultimaEdicion: data.ultimaEdicion
        };
    }
};
exports.cuentaAjenaConverter = cuentaAjenaConverter;
