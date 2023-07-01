import { isArray } from "lodash";
class ServiciosListasPrecio {
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
const ServiciosListasPrecioConverter = {
    toFirestore(servicioListaPrecio) {
        return {};
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        const locales = [];
        if (data.locales != undefined &&
            data.locales != null &&
            isArray(data.locales)) {
            data.locales.map((e) => {
                locales.push(e);
            });
        }
        return new ServiciosListasPrecio(data.version, snapshot.id, data.nombre, locales, data.clonarId, data.activo, data.ultimaEdicion);
    },
};
export { ServiciosListasPrecio, ServiciosListasPrecioConverter };
