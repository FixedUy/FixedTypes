"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VentasRelacionImporteTasasConverter = void 0;
const VentasRelacionImporteTasasConverter = {
    toFirestore(ventasRelacionImporteTasas) {
        return ventasRelacionImporteTasas;
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
exports.VentasRelacionImporteTasasConverter = VentasRelacionImporteTasasConverter;
