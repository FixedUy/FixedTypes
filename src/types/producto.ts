import {ProductosPrecios} from "./productosPrecios";

interface Producto {
  tipoItem: "producto";
  version: number;
  id: string;
  codigo: {[key: string]: string};
  todosLosCodigos: string[];
  nombre: string;
  rubroId: string;
  listaPrecio: {[key: string]: ProductosPrecios};
  unidad: string;
  activo: boolean;
  campoExtra: {[key: string]: string};
  stock: {[key: string]: number};
  buscablePor: null | string[];
  cantidadDecimales: number;
}

const productoConverter = {
  toFirestore(producto: Producto) {
    return producto;
  },
  fromFirestore(snapshot: any): Producto {
    const data = snapshot.data()!;

    return {
      tipoItem: "producto",
      version: data.version,
      id: snapshot.id,
      codigo: data.codigo,
      todosLosCodigos: data.todosLosCodigos,
      nombre: data.nombre,
      rubroId: data.rubroId,
      listaPrecio: data.listaPrecio,
      unidad: data.unidad,
      activo: data.activo,
      campoExtra: data.campoExtra,
      buscablePor: data.buscablePor,
      stock: data.stock,
      cantidadDecimales: data.cantidadDecimales
    };
  }
};

export {type Producto, productoConverter};
