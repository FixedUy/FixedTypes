/* eslint-disable require-jsdoc */
import { isArray } from "lodash";
import { ProductosPrecios } from "./productosPrecios";
import { ProductosRubro } from "./productosRubros";

class Producto {
  version: number;
  id: string;
  codigo: string[];
  nombre: string;
  rubro: ProductosRubro | string;
  listaPrecio: { [key: string]: ProductosPrecios };
  unidad: string;
  activo: boolean;
  // buscablePor: string[];

  constructor(
    version: number,
    id: string,
    codigo: string[],
    nombre: string,
    rubro: ProductosRubro | string,
    listaPrecio: { [key: string]: ProductosPrecios },
    unidad: string,
    activo: boolean
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
  toFirestore(servicio: Producto) {
    return {};
  },
  fromFirestore(snapshot): Producto {
    const data = snapshot.data()!;
    const listaPrecio: { [key: string]: ProductosPrecios } = {};
    if (
      data.listaPrecio != undefined &&
      data.listaPrecio != null &&
      isArray(data.listaPrecio)
    ) {
      data.listaPrecio.map((e) => {
        listaPrecio[e["id"]] = new ProductosPrecios(
          e["id"],
          e["nombre"],
          e["tasa"],
          e["precioSinIva"],
          e["precioConIva"],
          e["moneda"],
          e["precioArbitrario"]
        );
      });
    }

    return new Producto(
      data.version,
      snapshot.id,
      data.codigo,
      data.nombre,
      data.rubro,
      listaPrecio,
      data.unidad,
      data.activo
      // data.buscablePor,
    );
  },
};

export { Producto, ProductoConverter };
