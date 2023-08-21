import {isArray} from "lodash";

interface CajaMediosPagoCampoExtra {
  tipo: string;
  nombre: string;
  opciones: string[];
  obligatorio: boolean;
}

interface CajaMediosPago {
  version: number;
  id: string;
  nombre: string;
  requiereVencimiento: boolean;
  camposExtra: CajaMediosPagoCampoExtra[];
  activo: boolean;
  ultimaEdicion: number;
}

const cajaMediosPagoConverter = {
  toFirestore(mediosPago: CajaMediosPago) {
    return mediosPago;
  },
  fromFirestore(snapshot: any): CajaMediosPago {
    const data = snapshot.data()!;

    const campoExtraMediosPago: CajaMediosPagoCampoExtra[] = [];
    if (
      data.camposExtra != undefined &&
      data.camposExtra != null &&
      isArray(data.camposExtra)
    ) {
      data.camposExtra.map(e => {
        campoExtraMediosPago.push(
          (e["tipo"], e["nombre"], e["opciones"], e["obligatorio"])
        );
      });
    }

    return {
      version: data.version,
      id: snapshot.id,
      nombre: data.nombre,
      requiereVencimiento: data.requiereVencimiento,
      camposExtra: data.camposExtra,
      // camposExtra: campoExtraMediosPago,
      activo: data.activo,
      ultimaEdicion: data.ultimaEdicion
    };
  }
};

export {type CajaMediosPago, cajaMediosPagoConverter};
