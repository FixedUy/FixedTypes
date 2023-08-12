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
    return lista;
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
