interface ProductosListasPrecio {
  version: number;
  id: string;
  nombre: string;
  locales: string[];
  clonarId: string;
  activo: boolean;
  ultimaEdicion: number;
}

const productosListasPrecioConverter = {
  toFirestore(productoListaPrecio: ProductosListasPrecio) {
    return productoListaPrecio;
  },
  fromFirestore(snapshot: any): ProductosListasPrecio {
    const data = snapshot.data()!;

    return {
      version: data.version,
      id: snapshot.id,
      nombre: data.nombre,
      locales: data.locales,
      // locales: locales,
      clonarId: data.clonarId,
      activo: data.activo,
      ultimaEdicion: data.ultimaEdicion
    };
  }
};

export {type ProductosListasPrecio, productosListasPrecioConverter};
