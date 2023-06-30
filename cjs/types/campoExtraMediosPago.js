"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampoExtraMediosPagoConverter = exports.CampoExtraMediosPago = void 0;
class CampoExtraMediosPago {
    constructor(tipo, nombre, obligatorio) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.obligatorio = obligatorio;
    }
}
exports.CampoExtraMediosPago = CampoExtraMediosPago;
const CampoExtraMediosPagoConverter = {
    toFirestore(campoExtra) {
        return {
            tipo: campoExtra.tipo,
            nombre: campoExtra.nombre,
            obligatorio: campoExtra.obligatorio,
        };
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return new CampoExtraMediosPago(data.tipo, data.nombre, data.obligatorio);
    },
    // fromDataObject(data: any): CampoExtraMediosPago {
    //   return new CampoExtraMediosPago(
    //     data.tipo,
    //     data.nombre,
    //     data.obligatorio
    //   );
    // }
};
exports.CampoExtraMediosPagoConverter = CampoExtraMediosPagoConverter;
