import { isArray } from "lodash";
import { ServiciosPrecios } from "./serviciosPrecios";
class Servicio {
    version;
    id;
    codigo;
    nombre;
    rubro;
    listaPrecio;
    unidad;
    activo;
    campoExtra;
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
const ServicioConverter = {
    toFirestore(servicio) {
        return {};
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        const listaPrecio = {};
        if (data.listaPrecio != undefined &&
            data.listaPrecio != null &&
            isArray(data.listaPrecio)) {
            data.listaPrecio.map((e) => {
                listaPrecio[e["id"]] = new ServiciosPrecios(e["id"], e["nombre"], e["tasa"], e["precioSinIva"], e["precioConIva"], e["moneda"], e["precioArbitrario"]);
            });
        }
        return new Servicio(data.version, snapshot.id, data.codigo, data.nombre, data.rubro, listaPrecio, data.unidad, data.activo, data.campoExtra
        // data.buscablePor,
        );
    },
};
export { Servicio, ServicioConverter };
