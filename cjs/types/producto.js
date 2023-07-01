import { isArray } from "lodash";
import { ProductosPrecios } from "./productosPrecios";
class Producto {
    version;
    id;
    codigo;
    nombre;
    rubro;
    listaPrecio;
    unidad;
    activo;
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
const ProductoConverter = {
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
                listaPrecio[e["id"]] = new ProductosPrecios(e["id"], e["nombre"], e["tasa"], e["precioSinIva"], e["precioConIva"], e["moneda"], e["precioArbitrario"]);
            });
        }
        return new Producto(data.version, snapshot.id, data.codigo, data.nombre, data.rubro, listaPrecio, data.unidad, data.activo
        // data.buscablePor,
        );
    },
};
export { Producto, ProductoConverter };
