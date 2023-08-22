"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineaCompraConverter = void 0;
const LineaCompraConverter = {
    toFirestore(linea) {
        return {};
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            cantidad: data.cantidad,
            descripcion: data.descripcion,
            rubro: data.rubro,
            tasaIva: data.tasaIva,
            descuentoMontoSinIVA: data.descuentoMontoSinIVA,
            descuentoMontoConIVA: data.descuentoMontoConIVA,
            descuentoPorcentaje: data.descuentoPorcentaje,
            precioSinIva: data.precioSinIva,
            precioConIva: data.precioConIva,
            importeSinIVA: data.importeSinIVA,
            importeConIVA: data.importeConIVA,
            stock: data.stock,
            idProducto: data.idProducto
        };
    }
};
exports.LineaCompraConverter = LineaCompraConverter;
