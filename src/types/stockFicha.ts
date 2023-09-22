interface StockFichaLotes {
  loteId: string;
  cantidadQuitada: number;
  costo: number;
  moneda: string;
  cotizacion: number;
  documentoCreador: string;
  documentoCreadorId: string;
  fechaCreacion: number;
  fechaCreacionString: string;
  localId: string;
  tasaIVA: string;
  tieneStock: boolean;
  usuario: string;
}

interface StockFicha {
  id: string;
  version: number;
  esIngreso: boolean;
  fecha: number;
  cantidad: number;
  lotesQuitados: StockFichaLotes[];
  usuarioId: string;
  documentoCreador: string;
  documentoCreadorId: string;
  localId: string;
}

const stockFichaConverter = {
  toFirestore(stockFicha: StockFicha) {
    return stockFicha;
  },
  fromFirestore(snapshot: any): StockFicha {
    const data = snapshot.data()!;

    return {
      version: data.version,
      id: snapshot.id,
      documentoCreador: data.documentoCreador,
      documentoCreadorId: data.documentoCreadorId,
      fecha: data.fecha,
      cantidad: data.cantidad,
      lotesQuitados: data.lotesQuitados,
      usuarioId: data.usuarioId,
      localId: data.localId,
      esIngreso: data.esIngreso
    };
  }
};

export {type StockFicha, stockFichaConverter, type StockFichaLotes};
