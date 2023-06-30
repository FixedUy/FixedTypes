import {
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "firebase/firestore";

class CentroCostos {
  id: string;
  nombre: string;
  valorExportacion: number;
  superior: null;

  constructor(
    id: string,
    nombre: string,
    valorExportacion: number,
    superior: null
  ) {
    this.id = id;
    this.nombre = nombre;
    this.valorExportacion = valorExportacion;
    this.superior = superior;
  }
}

const centroCostosConverter = {
  toFirestore(centroCostos: CentroCostos): DocumentData {
    return {};
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): CentroCostos {
    const data = snapshot.data(options)!;
    return new CentroCostos(
      snapshot.id,
      data.nombre,
      data.valorExportacion,
      data.superior
    );
  },
};

export { CentroCostos, centroCostosConverter };
