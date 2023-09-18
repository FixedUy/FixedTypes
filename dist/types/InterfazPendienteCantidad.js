"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterfazPendienteCantidadoConverter = void 0;
const InterfazPendienteCantidadoConverter = {
    toFirestore(interfazPendienteCantidad) {
        return interfazPendienteCantidad;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            version: data.version,
            cantidadOriginal: data.cantidadOriginal,
            cantidadActual: data.cantidadActual,
            nroLinea: data.nroLinea,
            tipo: data.tipo,
            productoId: data.productoId,
            servicioId: data.servicioId,
            descripcion: data.descripcion,
            precioUnitario: data.precioUnitario,
            importe: data.importe,
            tasaIVA: data.tasaIVA
        };
    }
};
exports.InterfazPendienteCantidadoConverter = InterfazPendienteCantidadoConverter;
