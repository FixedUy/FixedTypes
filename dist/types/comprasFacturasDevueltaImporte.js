"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComprasFacturasDevueltaImporteConverter = void 0;
const ComprasFacturasDevueltaImporteConverter = {
    toFirestore(comprasFacturasDevueltaImporte) {
        return comprasFacturasDevueltaImporte;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            idDocumento: data.idDocumento,
            idCompra: data.idCompra,
            descripcion: data.descripcion,
            relacionImporteTasasPendientes: data.relacionImporteTasasPendientes,
            relacionImporteTasasCancelar: data.relacionImporteTasasCancelar
        };
    }
};
exports.ComprasFacturasDevueltaImporteConverter = ComprasFacturasDevueltaImporteConverter;
