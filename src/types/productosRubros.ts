interface ProductosRubro {
  version: number;
  id: string;
  codigo: string;
  nombre: string;
  padreId: string | null;
  nombreCompleto: string;
  activo: boolean;
  esHoja: boolean;
  ultimaEdicion: number;
}

const productosRubroConverter = {
  toFirestore(productoRubro: ProductosRubro) {
    return productoRubro;
  },
  fromFirestore(snapshot: any): ProductosRubro {
    const data = snapshot.data()!;
    return {
      version: data.version,
      id: snapshot.id,
      codigo: data.codigo,
      nombre: data.nombre,
      padreId: data.padreId,
      nombreCompleto: data.nombreCompleto,
      activo: data.activo,
      esHoja: data.esHoja,
      ultimaEdicion: data.ultimaEdicion
    };
  }
};

export {type ProductosRubro, productosRubroConverter};
