interface VentaLinea {
  cantidad: number;
  descripcion: string;
  descripcionLarga: string;
  rubro: string;
  centroCosto: string;
  tasaIva: string;
  montoBruto: 0 | 1 | 2 | 3;
  // indica si precio y descuento son:
  // 0 = sin iva | 1 = iva incl
  // | 2 = iva imeba incl | 3 = literal e o monitributo
  descuentoMonto: number; // Descuento total, no unitario
  tipo: "manual" | "servicio" | "producto" | "remito";
  descuentoPorcentaje: number;
  precio: number;
  importe: number; // = (precio * cantidad) - descuentoMonto
  stockProducto: {[key: string]: number} | null;
  // solo para producto para validacion en formulario de venta
  // cuando se guarda el detalle de la venta, este campo se elimina
  idProducto: string;
  idServicio: string;
  listaPrecio: string;
  retenciones: VentaRetencion[];
}

const VentaLineaConverter = {
  toFirestore(linea: VentaLinea) {
    return linea;
  },
  fromFirestore(snapshot: any): VentaLinea {
    const data = snapshot.data()!;
    return {
      cantidad: data.cantidad,
      descripcion: data.descripcion,
      descripcionLarga: data.descripcionLarga,
      rubro: data.rubro,
      centroCosto: data.centroCosto,
      tipo: data.tipo,
      tasaIva: data.tasaIva,
      montoBruto: data.montoBruto,
      descuentoMonto: data.descuentoMonto,
      descuentoPorcentaje: data.descuentoPorcentaje,
      precio: data.precio,
      importe: data.importe,
      stockProducto: data.stockProducto ?? null,
      idProducto: data.idProducto,
      idServicio: data.idServicio,
      listaPrecio: data.listaPrecio,
      retenciones: data.retenciones
    };
  }
};

interface VentaRetencion {
  codigo: number;
  tasa: number;
  valor: number;
}

export {type VentaRetencion, type VentaLinea, VentaLineaConverter};
