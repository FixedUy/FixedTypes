import {Cotizacion} from "./cotizacion";

interface Cotizaciones {
  fecha: string;
  cotizaciones: {[key: string]: Cotizacion};
}

const cotizacionesConverter = {
  toFirestore(cotizacion: Cotizaciones) {
    return cotizacion;
  },
  fromFirestore(snapshot: any): Cotizaciones {
    const data = snapshot.data()!;
    return {
      fecha: data.fecha,
      cotizaciones: data.cotizaciones
    };
  }
};

export {type Cotizaciones, cotizacionesConverter};
