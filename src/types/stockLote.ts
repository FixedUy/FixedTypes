interface StockLote {
  version: number;
  id: string;
  cantidadActual: number;
  cantidadOriginal: number;
  costo: number;
  cotización: number;
  documentoCreador: string;
  documentoCreadorId: string;
  fechaCreacion: number;
  fechaCreacionString: string;
  localId: string;
  moneda: string;
  tasaIVA: string;
  tieneStock: boolean;
  usuario: string;
}

const stockLoteConverter = {
  toFirestore(stockLote: StockLote) {
    return stockLote;
  },
  fromFirestore(snapshot: any): StockLote {
    const data = snapshot.data()!;

    return {
      version: data.version,
      id: snapshot.id,
      cantidadActual: data.cantidadActual,
      cantidadOriginal: data.cantidadOriginal,
      costo: data.costo,
      cotización: data.cotización,
      documentoCreador: data.documentoCreador,
      documentoCreadorId: data.documentoCreadorId,
      fechaCreacion: data.fechaCreacion,
      fechaCreacionString: data.fechaCreacionString,
      localId: data.localId,
      moneda: data.moneda,
      tasaIVA: data.tasaIVA,
      tieneStock: data.tieneStock,
      usuario: data.usuario
    };
  }
};

export {type StockLote, stockLoteConverter};
