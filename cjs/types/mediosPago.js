"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediosPagoConverter = exports.MediosPago = void 0;
const campoExtraMediosPago_1 = require("./campoExtraMediosPago");
const lodash_1 = require("lodash");
class MediosPago {
    constructor(version, id, nombre, identificable, requiereVencimiento, camposExtra, activo, ultimaEdicion) {
        this.version = version;
        this.id = id;
        this.nombre = nombre;
        this.identificable = identificable;
        this.requiereVencimiento = requiereVencimiento;
        this.camposExtra = camposExtra;
        this.activo = activo;
        this.ultimaEdicion = ultimaEdicion;
    }
}
exports.MediosPago = MediosPago;
const MediosPagoConverter = {
    toFirestore(mediosPago) {
        return {};
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        const campoExtraMediosPago = [];
        if (data.camposExtra != undefined &&
            data.camposExtra != null &&
            (0, lodash_1.isArray)(data.camposExtra)) {
            data.camposExtra.map((e) => {
                campoExtraMediosPago.push(new campoExtraMediosPago_1.CampoExtraMediosPago(e["tipo"], e["nombre"], e["obligatorio"]));
            });
        }
        return new MediosPago(data.version, snapshot.id, data.nombre, data.identificable, data.requiereVencimiento, campoExtraMediosPago, data.activo, data.ultimaEdicion);
    },
};
exports.MediosPagoConverter = MediosPagoConverter;
