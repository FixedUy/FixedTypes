interface HistoricoPrecio {
  idProducto: string;
  idLista: string;
  fechaNumero: number;
  fechaString: string;
  moneda: string;
  precioSinIVA: number;
  precioConIVA: number;
  tasaIVA: string;
  arbitrario: boolean;
  idUsuario: string;
  origenCambio: string;
  idEmpresa: string;
}

const historicoPrecioConverter = {
  toFirestore(historicoPrecio: HistoricoPrecio) {
    return historicoPrecio;
  },
  fromFirestore(snapshot: any): HistoricoPrecio {
    const data = snapshot.data()!;
    return {
      idProducto: data.idProducto,
      idLista: data.idLista,
      fechaNumero: data.fechaNumero,
      fechaString: data.fechaString,
      moneda: data.moneda,
      precioSinIVA: data.precioSinIVA,
      precioConIVA: data.precioConIVA,
      tasaIVA: data.tasaIVA,
      arbitrario: data.arbitrario,
      idUsuario: data.idUsuario,
      origenCambio: data.origenCambio,
      idEmpresa: data.idEmpresa
    };
  }
};

export {type HistoricoPrecio, historicoPrecioConverter};
