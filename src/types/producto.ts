import {
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
  WithFieldValue
} from "firebase/firestore";
import {isArray} from "lodash";
import {ProductosPrecios} from "./productosPrecios";
import {ProductosRubro} from "./productosRubros";
import {Local} from "./local";

class Producto {
  version: number;
  id: string;
  codigo: string[];
  nombre: string;
  rubro: ProductosRubro | string;
  listaPrecio: {[key: string]: ProductosPrecios};
  unidad: string;
  activo: boolean;
  campoExtra: {[key: string]: string};
  stock: {[key: string]: number};
  // buscablePor: string[];

  constructor(
    version: number,
    id: string,
    codigo: string[],
    nombre: string,
    rubro: ProductosRubro | string,
    listaPrecio: {[key: string]: ProductosPrecios},
    unidad: string,
    activo: boolean,
    campoExtra: {[key: string]: string},
    stock: {[key: string]: number}
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
    this.stock = stock;
    // this.buscablePor = buscablePor;
  }
}

const ProductoConverter = {
  toFirestore(servicio: Producto): DocumentData {
    return {};
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): Producto {
    const data = snapshot.data(options)!;
    const listaPrecio: {[key: string]: ProductosPrecios} = {};
    if (
      data.listaPrecio != undefined &&
      data.listaPrecio != null &&
      isArray(data.listaPrecio)
    ) {
      data.listaPrecio.map(e => {
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
      data.activo,
      data.campoExtra,
      data.stock
      // data.buscablePor,
    );
  }
};

export {Producto, ProductoConverter};
