"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ventasRubroConverter = void 0;
const ventasRubroConverter = {
    toFirestore(ventasRubros) {
        return ventasRubros;
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
exports.ventasRubroConverter = ventasRubroConverter;
