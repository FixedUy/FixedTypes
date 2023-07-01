class Moneda {
  id: string;
  nombre: string;
  simbolo: string;
  codigoBcu: number | string;
  codigoIso: string;
  numeroIso: number | string;
  activo: boolean;
  ultimaEdicion: number;

  constructor(
    id: string,
    nombre: string,
    simbolo: string,
    codigoBcu: number | string,
    codigoIso: string,
    numeroIso: number | string,
    activo: boolean,
    ultimaEdicion: number
  ) {
    this.id = id;
    this.nombre = nombre;
    this.simbolo = simbolo;
    this.codigoBcu = codigoBcu;
    this.codigoIso = codigoIso;
    this.numeroIso = numeroIso;
    this.activo = activo;
    this.ultimaEdicion = ultimaEdicion;
  }
}

const monedaConverter = {
  toFirestore(moneda: Moneda) {
    return {};
  },
  fromFirestore(snapshot): Moneda {
    const data = snapshot.data()!;
    return new Moneda(
      snapshot.id,
      data.nombre,
      data.simbolo,
      data.codigoBcu,
      data.codigoIso,
      data.numeroIso,
      data.activo,
      data.ultimaEdicion
    );
  },
};

export { Moneda, monedaConverter };
