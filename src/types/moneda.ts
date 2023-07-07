interface Moneda {
  id: string;
  nombre: string;
  simbolo: string;
  codigoBcu: number | string;
  codigoIso: string;
  numeroIso: number | string;
  activo: boolean;
  ultimaEdicion: number;
}

const monedaConverter = {
  toFirestore(moneda: Moneda) {
    return {};
  },
  fromFirestore(snapshot: any): Moneda {
    const data = snapshot.data()!;
    return {
      id: snapshot.id,
      nombre: data.nombre,
      simbolo: data.simbolo,
      codigoBcu: data.codigoBcu,
      codigoIso: data.codigoIso,
      numeroIso: data.numeroIso,
      activo: data.activo,
      ultimaEdicion: data.ultimaEdicion
    };
  }
};

export {type Moneda, monedaConverter};
