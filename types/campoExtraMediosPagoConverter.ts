import {
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "firebase/firestore";
import { CampoExtraMediosPago } from "./campoExtraMediosPago";

export const CampoExtraMediosPagoConverter = {
  toFirestore(campoExtra: CampoExtraMediosPago): DocumentData {
    return {
      tipo: campoExtra.tipo,
      nombre: campoExtra.nombre,
      obligatorio: campoExtra.obligatorio,
    };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): CampoExtraMediosPago {
    const data = snapshot.data(options)!;
    return new CampoExtraMediosPago(data.tipo, data.nombre, data.obligatorio);
  },
  // fromDataObject(data: any): CampoExtraMediosPago {
  //   return new CampoExtraMediosPago(
  //     data.tipo,
  //     data.nombre,
  //     data.obligatorio
  //   );
  // }
};
