"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productosRubroConverter = void 0;
const productosRubroConverter = {
    toFirestore(servicioRubros) {
        return {};
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            version: data.version,
            id: snapshot.id,
            codigo: data.codigo,
            nombre: data.nombre,
            padreId: data.padreId,
            nombreCompleto: data.nombreCompleto,
            activo: data.activo,
            esHoja: data.esHoja,
            ultimaEdicion: data.ultimaEdicion
        };
    }
};
exports.productosRubroConverter = productosRubroConverter;
