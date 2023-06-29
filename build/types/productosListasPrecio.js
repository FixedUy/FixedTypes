import { isArray } from "lodash";
class ProductosListasPrecio {
    version;
    id;
    nombre;
    locales;
    clonarId;
    activo;
    ultimaEdicion;
    constructor(version, id, nombre, locales, clonarId, activo, ultimaEdicion) {
        this.version = version;
        this.id = id;
        this.nombre = nombre;
        this.locales = locales;
        this.clonarId = clonarId;
        this.activo = activo;
        this.ultimaEdicion = ultimaEdicion;
    }
}
const ProductosListasPrecioConverter = {
    toFirestore(servicioListaPrecio) {
        return {};
    },
    fromFirestore(snapshot, options) {
        const data = snapshot.data(options);
        const locales = [];
        if (data.locales != undefined &&
            data.locales != null &&
            isArray(data.locales)) {
            data.locales.map(e => {
                locales.push(e);
            });
        }
        return new ProductosListasPrecio(data.version, snapshot.id, data.nombre, locales, data.clonarId, data.activo, data.ultimaEdicion);
    }
};
export { ProductosListasPrecio, ProductosListasPrecioConverter };
