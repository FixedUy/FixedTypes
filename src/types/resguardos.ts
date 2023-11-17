import {ResguardosRetencion} from "./resguardosRetencion";
import {ResguardosReferenciaNormal} from "./resguardosReferenciaNormal";
import {ResguardosReferenciaCFE} from "./resguardosReferenciaCFE";

interface Resguardos {
  id: string;
  emisorId: string;
  localId: string;
  fecha: number;
  fechaString: string;
  receptorId: string;
  receptorString: string;
  moneda: string;
  retenciones: ResguardosRetencion[];
  referencias: (ResguardosReferenciaCFE | ResguardosReferenciaNormal)[];
  observaciones: string;
  valor: number;
  cfe: string;
}

const resguardosConverter = {
  toFirestore(resguardos: Resguardos) {
    return resguardos;
  },
  fromFirestore(snapshot: any): Resguardos {
    const data = snapshot.data()!;
    return {
      id: snapshot.id,
      emisorId: data.emisorId,
      localId: data.localId,
      fecha: data.fecha,
      fechaString: data.fechaString,
      receptorId: data.receptorId,
      receptorString: data.receptorString,
      moneda: data.moneda,
      retenciones: data.retenciones,
      referencias: data.referencias,
      observaciones: data.observaciones,
      valor: data.valor,
      cfe: data.cfe
    };
  }
};

export {type Resguardos, resguardosConverter};
