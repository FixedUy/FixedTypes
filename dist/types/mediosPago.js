"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediosPagoConverter = void 0;
const MediosPagoConverter = {
    toFirestore(mediosPago) {
        return mediosPago;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        // const campoExtraMediosPago: CampoExtraMediosPago[] = [];
        // if (
        //   data.camposExtra != undefined &&
        //   data.camposExtra != null &&
        //   isArray(data.camposExtra)
        // ) {
        //   data.camposExtra.map(e => {
        //     campoExtraMediosPago.push({
        //       tipo: e["tipo"],
        //       nombre: e["nombre"],
        //       obligatorio: e["obligatorio"]
        //     });
        //   });
        // }
        return {
            version: data.version,
            id: snapshot.id,
            nombre: data.nombre,
            identificable: data.identificable,
            requiereVencimiento: data.requiereVencimiento,
            camposExtra: data.camposExtra,
            // camposExtra: campoExtraMediosPago,
            activo: data.activo,
            ultimaEdicion: data.ultimaEdicion
        };
    }
};
exports.MediosPagoConverter = MediosPagoConverter;
