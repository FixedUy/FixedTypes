interface Cotizacion {
  codigoBcu: string;
  cotizacion: number;
}

const cotizacionConverter = {
  toFirestore(cotizacion: Cotizacion) {
    return cotizacion;
  },
  fromFirestore(snapshot: any): Cotizacion {
    const data = snapshot.data()!;
    return {
      codigoBcu: data.codigoBcu,
      cotizacion: data.cotizacion
    };
  }
};

export {type Cotizacion, cotizacionConverter};
