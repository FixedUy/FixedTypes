import {
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
  WithFieldValue,
} from "firebase/firestore";
import { TasaIVA } from "./tasaIVA";
import { Moneda } from "./moneda";

class ServiciosPrecios {
  id: string;
  nombre: string;
  tasa: TasaIVA | string;
  precioSinIva: number;
  precioConIva: number;
  moneda: Moneda | string;
  precioArbitrario: boolean;

  constructor(
    id: string,
    nombre: string,
    tasa: TasaIVA | string,
    precioSinIva: number,
    precioConIva: number,
    moneda: Moneda | string,
    precioArbitrario: boolean
  ) {
    this.id = id;
    this.nombre = nombre;
    this.tasa = tasa;
    this.precioSinIva = precioSinIva;
    this.precioConIva = precioConIva;
    this.moneda = moneda;
    this.precioArbitrario = precioArbitrario;
  }
}

const ServiciosPreciosConverter = {
  toFirestore(serviciosPreciosAux: ServiciosPrecios): DocumentData {
    return {
      id: serviciosPreciosAux.id,
      nombre: serviciosPreciosAux.nombre,
      tasa: serviciosPreciosAux.tasa,
      precioSinIva: serviciosPreciosAux.precioSinIva,
      precioConIva: serviciosPreciosAux.precioConIva,
      moneda: serviciosPreciosAux.moneda,
      precioArbitrario: serviciosPreciosAux.precioArbitrario,
    };
  },
  fromFirestore(snapshot: QueryDocumentSnapshot): ServiciosPrecios {
    const data = snapshot.data()!;
    return new ServiciosPrecios(
      data.id,
      data.nombre,
      data.tasa,
      data.precioSinIva,
      data.precioConIva,
      data.moneda,
      data.precioArbitrario
    );
  },
};

export { ServiciosPrecios, ServiciosPreciosConverter };
