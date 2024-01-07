"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accesoSMTPConverter = void 0;
const accesoSMTPConverter = {
    toFirestore(accesoSMTP) {
        return accesoSMTP;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            id: snapshot.id,
            nombreCuenta: data.nombreCuenta,
            usuario: data.usuario,
            clave: data.clave,
            host: data.host,
            puerto: data.puerto
        };
    }
};
exports.accesoSMTPConverter = accesoSMTPConverter;
