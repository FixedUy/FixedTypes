"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicioConverter = exports.Servicio = void 0;
const lodash_1 = require("lodash");
const serviciosPrecios_1 = require("./serviciosPrecios");
class Servicio {
    // buscablePor: string[];
    constructor(version, id, codigo, nombre, rubro, listaPrecio, unidad, activo, campoExtra
    // buscablePor: string[],
    ) {
        this.version = version;
        this.id = id;
        this.codigo = codigo;
        this.nombre = nombre;
        this.rubro = rubro;
        this.listaPrecio = listaPrecio;
        this.unidad = unidad;
        this.activo = activo;
        this.campoExtra = campoExtra;
        // this.buscablePor = buscablePor;
    }
}
exports.Servicio = Servicio;
const ServicioConverter = {
    toFirestore(servicio) {
        return {};
    },
    fromFirestore(snapshot, options) {
        const data = snapshot.data(options);
        const listaPrecio = {};
        if (data.listaPrecio != undefined &&
            data.listaPrecio != null &&
            (0, lodash_1.isArray)(data.listaPrecio)) {
            data.listaPrecio.map(e => {
                listaPrecio[e["id"]] = new serviciosPrecios_1.ServiciosPrecios(e["id"], e["nombre"], e["tasa"], e["precioSinIva"], e["precioConIva"], e["moneda"], e["precioArbitrario"]);
            });
        }
        return new Servicio(data.version, snapshot.id, data.codigo, data.nombre, data.rubro, listaPrecio, data.unidad, data.activo, data.campoExtra
        // data.buscablePor,
        );
    }
};
exports.ServicioConverter = ServicioConverter;
