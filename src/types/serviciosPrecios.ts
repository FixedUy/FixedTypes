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
    return lista;
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
