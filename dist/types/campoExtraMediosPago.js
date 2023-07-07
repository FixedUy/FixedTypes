"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampoExtraMediosPagoConverter = void 0;
const CampoExtraMediosPagoConverter = {
    toFirestore(campoExtra) {
        return {
            tipo: campoExtra.tipo,
            nombre: campoExtra.nombre,
            obligatorio: campoExtra.obligatorio
        };
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return {
            tipo: data.tipo,
            nombre: data.nombre,
            obligatorio: data.obligatorio
        };
    }
    // fromDataObject(data: any): CampoExtraMediosPago {
    //   return new CampoExtraMediosPago(
    //     data.tipo,
    //     data.nombre,
    //     data.obligatorio
    //   );
    // }
};
exports.CampoExtraMediosPagoConverter = CampoExtraMediosPagoConverter;
