"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoConverter = exports.Producto = void 0;
const lodash_1 = require("lodash");
const productosPrecios_1 = require("./productosPrecios");
class Producto {
    // buscablePor: string[];
    constructor(version, id, codigo, nombre, rubro, listaPrecio, unidad, activo
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
        // this.buscablePor = buscablePor;
    }
}
exports.Producto = Producto;
const ProductoConverter = {
    toFirestore(servicio) {
        return {};
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        const listaPrecio = {};
        if (data.listaPrecio != undefined &&
            data.listaPrecio != null &&
            (0, lodash_1.isArray)(data.listaPrecio)) {
            data.listaPrecio.map((e) => {
                listaPrecio[e["id"]] = new productosPrecios_1.ProductosPrecios(e["id"], e["nombre"], e["tasa"], e["precioSinIva"], e["precioConIva"], e["moneda"], e["precioArbitrario"]);
            });
        }
        return new Producto(data.version, snapshot.id, data.codigo, data.nombre, data.rubro, listaPrecio, data.unidad, data.activo
        // data.buscablePor,
        );
    },
};
exports.ProductoConverter = ProductoConverter;
