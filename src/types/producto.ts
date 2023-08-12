import {ProductosPrecios} from "./productosPrecios";
import {ProductosRubro} from "./productosRubros";

interface Producto {
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
}

const productoConverter = {
  toFirestore(producto: Producto) {
    return producto;
  },
  fromFirestore(snapshot: any): Producto {
    const data = snapshot.data()!;

    return {
      version: data.version,
      id: snapshot.id,
      codigo: data.codigo,
      nombre: data.nombre,
      rubro: data.rubro,
      listaPrecio: data.listaPrecio,
      unidad: data.unidad,
      activo: data.activo,
      campoExtra: data.campoExtra,
      stock: data.stock
    };
  }
};

export {type Producto, productoConverter};
