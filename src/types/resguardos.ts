import {ResguardosRetencion} from "./resguardosRetencion";
import {ResguardosReferenciaNormal} from "./resguardosReferenciaNormal";
import {ResguardosReferenciaCFE} from "./resguardosReferenciaCFE";
import {Cliente} from "./cliente";

interface Resguardos {
  id: string;
  fecha: string;
  fechaString: string;
  receptor: Cliente;
  moneda: string;
  retenciones: ResguardosRetencion[];
  referencias: (ResguardosReferenciaCFE | ResguardosReferenciaNormal)[];
  observaciones: string;
  valor: number;
}

const resguardosConverter = {
  toFirestore(resguardos: Resguardos) {
    return resguardos;
  },
  fromFirestore(snapshot: any): Resguardos {
    const data = snapshot.data()!;
    return {
      id: snapshot.id,
      fecha: data.fecha,
      fechaString: data.string,
      receptor: data.receptor,
      moneda: data.moneda,
      retenciones: data.retenciones,
      referencias: data.referencias,
      observaciones: data.observaciones,
      valor: data.valor
    };
  }
};

export {type Resguardos, resguardosConverter};
