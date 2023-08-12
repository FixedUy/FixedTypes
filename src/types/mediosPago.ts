import {CampoExtraMediosPago} from "./campoExtraMediosPago";

interface MediosPago {
  version: number;
  id: string;
  nombre: string;
  identificable: boolean;
  requiereVencimiento: boolean;
  camposExtra: CampoExtraMediosPago[];
  activo: boolean;
  ultimaEdicion: number;
}

const MediosPagoConverter = {
  toFirestore(mediosPago: MediosPago) {
    return mediosPago;
  },
  fromFirestore(snapshot: any): MediosPago {
    const data = snapshot.data()!;

    // const campoExtraMediosPago: CampoExtraMediosPago[] = [];
    // if (
    //   data.camposExtra != undefined &&
    //   data.camposExtra != null &&
    //   isArray(data.camposExtra)
    // ) {
    //   data.camposExtra.map(e => {
    //     campoExtraMediosPago.push({
    //       tipo: e["tipo"],
    //       nombre: e["nombre"],
    //       obligatorio: e["obligatorio"]
    //     });
    //   });
    // }

    return {
      version: data.version,
      id: snapshot.id,
      nombre: data.nombre,
      identificable: data.identificable,
      requiereVencimiento: data.requiereVencimiento,
      camposExtra: data.camposExtra,
      // camposExtra: campoExtraMediosPago,
      activo: data.activo,
      ultimaEdicion: data.ultimaEdicion
    };
  }
};

export {type MediosPago, MediosPagoConverter};
