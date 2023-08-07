interface ServiciosPrecios {
  idLista: string;
  tasa: string;
  precioSinIva: number;
  precioConIva: number;
  moneda: string;
  precioArbitrario: boolean;
}

const serviciosPreciosConverter = {
  toFirestore(lista: ServiciosPrecios) {
    return {
      idLista: lista.idLista,
      tasa: lista.tasa,
      precioSinIva: lista.precioSinIva,
      precioConIva: lista.precioConIva,
      moneda: lista.moneda,
      precioArbitrario: lista.precioArbitrario
    };
  },
  fromFirestore(snapshot: any): ServiciosPrecios {
    const data = snapshot.data()!;
    return {
      idLista: data.idLista,
      precioSinIva: data.precioSinIva,
      precioConIva: data.precioConIva,
      moneda: data.moneda,
      tasa: data.tasa,
      precioArbitrario: data.precioArbitrario
    };
  }
};

export {type ServiciosPrecios, serviciosPreciosConverter};
