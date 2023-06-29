import {
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions
} from "firebase/firestore";

class TasaIVA {
  id: string;
  nombre: string;
  sigla: string;
  valor: number | string;
  cfeDgi: "Basic" | "Exp" | "Min" | "Exe" | "Otro" | "";
  activoProductos: boolean;
  activoServicios: boolean;
  ultimaEdicion: number;

  constructor(
    id: string,
    nombre: string,
    sigla: string,
    valor: number | string,
    cfeDgi: "Basic" | "Exp" | "Min" | "Exe" | "Otro" | "",
    activoProductos: boolean,
    activoServicios: boolean,
    ultimaEdicion: number
  ) {
    this.id = id;
    this.nombre = nombre;
    this.sigla = sigla;
    this.valor = valor;
    this.cfeDgi = cfeDgi;
    this.activoProductos = activoProductos;
    this.activoServicios = activoServicios;
    this.ultimaEdicion = ultimaEdicion;
  }
}

const tasaConverter = {
  toFirestore(tasa: TasaIVA): DocumentData {
    return {};
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): TasaIVA {
    const data = snapshot.data(options)!;
    return new TasaIVA(
      snapshot.id,
      data.nombre,
      data.sigla,
      data.valor,
      data.cfeDgi,
      data.activoProductos,
      data.activoServicios,
      data.ultimaEdicion
    );
  }
};

export { TasaIVA, tasaConverter };