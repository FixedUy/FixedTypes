"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VentasFacturasDevueltaImporteConverter = void 0;
const VentasFacturasDevueltaImporteConverter = {
    toFirestore(ventasFacturasDevueltaImporte) {
        return ventasFacturasDevueltaImporte;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            idDocumento: data.idDocumento,
            idVenta: data.idVenta,
            descripcion: data.descripcion,
            relacionImporteTasasPendientes: data.relacionImporteTasasPendientes,
            relacionImporteTasasCancelar: data.relacionImporteTasasCancelar
        };
    }
};
exports.VentasFacturasDevueltaImporteConverter = VentasFacturasDevueltaImporteConverter;
