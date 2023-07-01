/* eslint-disable arrow-parens */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable require-jsdoc */
import {CampoExtraMediosPago} from "./campoExtraMediosPago";
import {isArray} from "lodash";

class MediosPago {
  version: number;
  id: string;
  nombre: string;
  identificable: boolean;
  requiereVencimiento: boolean;
  camposExtra: CampoExtraMediosPago[];
  activo: boolean;
  ultimaEdicion: number;

  constructor(
    version: number,
    id: string,
    nombre: string,
    identificable: boolean,
    requiereVencimiento: boolean,
    camposExtra: CampoExtraMediosPago[],
    activo: boolean,
    ultimaEdicion: number
  ) {
    this.version = version;
    this.id = id;
    this.nombre = nombre;
    this.identificable = identificable;
    this.requiereVencimiento = requiereVencimiento;
    this.camposExtra = camposExtra;
    this.activo = activo;
    this.ultimaEdicion = ultimaEdicion;
  }
}

const MediosPagoConverter = {
  toFirestore(mediosPago: MediosPago) {
    mediosPago;
    return {};
  },
  fromFirestore(snapshot: any): MediosPago {
    const data = snapshot.data()!;

    const campoExtraMediosPago: CampoExtraMediosPago[] = [];
    if (
      data.camposExtra != undefined &&
      data.camposExtra != null &&
      isArray(data.camposExtra)
    ) {
      data.camposExtra.map((e: any) => {
        campoExtraMediosPago.push(
          new CampoExtraMediosPago(e["tipo"], e["nombre"], e["obligatorio"])
        );
      });
    }

    return new MediosPago(
      data.version,
      snapshot.id,
      data.nombre,
      data.identificable,
      data.requiereVencimiento,
      campoExtraMediosPago,
      data.activo,
      data.ultimaEdicion
    );
  }
};

export {MediosPago, MediosPagoConverter};
