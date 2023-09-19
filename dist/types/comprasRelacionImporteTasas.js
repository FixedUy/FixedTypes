"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComprasRelacionImporteTasasConverter = void 0;
const ComprasRelacionImporteTasasConverter = {
    toFirestore(comprasRelacionImporteTasas) {
        return comprasRelacionImporteTasas;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            tasaIva: data.tasaIva,
            importe: data.importe,
            nroLinea: data.nroLinea
        };
    }
};
exports.ComprasRelacionImporteTasasConverter = ComprasRelacionImporteTasasConverter;
