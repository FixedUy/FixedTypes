"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterfazPendienteImporteConverter = void 0;
const InterfazPendienteImporteConverter = {
    toFirestore(interfazPendienteImporte) {
        return interfazPendienteImporte;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            version: data.version,
            descripcion: data.descripcion,
            importe: data.importe,
            tasaIVA: data.tasaIVA,
            nroLinea: data.nroLinea
        };
    }
};
exports.InterfazPendienteImporteConverter = InterfazPendienteImporteConverter;
