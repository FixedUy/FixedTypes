"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cajaMediosPagoConverter = void 0;
const lodash_1 = require("lodash");
const cajaMediosPagoConverter = {
    toFirestore(mediosPago) {
        return mediosPago;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        const campoExtraMediosPago = [];
        if (data.camposExtra != undefined &&
            data.camposExtra != null &&
            (0, lodash_1.isArray)(data.camposExtra)) {
            data.camposExtra.map(e => {
                campoExtraMediosPago.push((e["tipo"], e["nombre"], e["opciones"], e["obligatorio"]));
            });
        }
        return {
            version: data.version,
            id: snapshot.id,
            nombre: data.nombre,
            requiereVencimiento: data.requiereVencimiento,
            camposExtra: data.camposExtra,
            // camposExtra: campoExtraMediosPago,
            activo: data.activo,
            ultimaEdicion: data.ultimaEdicion
        };
    }
};
exports.cajaMediosPagoConverter = cajaMediosPagoConverter;
