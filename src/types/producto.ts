import {ProductosPrecios} from "./productosPrecios";

interface Producto {
  version: number;
  tipo: "producto";
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
      version: data.version,
      tipo: "producto",
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
