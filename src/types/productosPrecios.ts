import {
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
  WithFieldValue,
} from "firebase/firestore";
import { TasaIVA } from "./tasaIVA";
import { Moneda } from "./moneda";

class ProductosPrecios {
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

const ProductosPreciosConverter = {
  toFirestore(productosPreciosAux: ProductosPrecios): DocumentData {
    return {
      id: productosPreciosAux.id,
      nombre: productosPreciosAux.nombre,
      tasa: productosPreciosAux.tasa,
      precioSinIva: productosPreciosAux.precioSinIva,
      precioConIva: productosPreciosAux.precioConIva,
      moneda: productosPreciosAux.moneda,
      precioArbitrario: productosPreciosAux.precioArbitrario,
    };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): ProductosPrecios {
    const data = snapshot.data(options)!;
    return new ProductosPrecios(
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

export { ProductosPrecios, ProductosPreciosConverter };
