interface ProductosPrecios {
  idLista: string;
  tasa: string;
  precioSinIva: number;
  precioConIva: number;
  moneda: string;
  precioArbitrario: boolean;
}

const productosPreciosConverter = {
  toFirestore(lista: ProductosPrecios) {
    return {
      idLista: lista.idLista,
      tasa: lista.tasa,
      precioSinIva: lista.precioSinIva,
      precioConIva: lista.precioConIva,
      moneda: lista.moneda,
      precioArbitrario: lista.precioArbitrario
    };
  },
  fromFirestore(snapshot: any): ProductosPrecios {
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

export {type ProductosPrecios, productosPreciosConverter};
