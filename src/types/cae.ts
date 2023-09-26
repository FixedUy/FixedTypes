interface CAE {
  version: number;
  id: string;
  fechaCreacion: number;
  ruce: number;
  tcfe: number;
  serie: string;
  dNumero: number;
  hNumero: number;
  numeroAutorizacion: number;
  fechaAutorizacion: string;
  fechaVencimiento: string;
  activo: boolean;
  buscablePor: null | string[];
}

const CAEConverter = {
  toFirestore(cae: CAE) {
    return cae;
  },
  fromFirestore(snapshot: any): CAE {
    const data = snapshot.data()!;
    return {
      version: data.version,
      id: snapshot.id,
      fechaCreacion: data.fechaCreacion,
      ruce: data.ruce,
      tcfe: data.tcfe,
      serie: data.serie,
      dNumero: data.dNumero,
      hNumero: data.hNumero,
      numeroAutorizacion: data.numeroAutorizacion,
      fechaAutorizacion: data.fechaAutorizacion,
      fechaVencimiento: data.fechaVencimiento,
      activo: data.activo,
      buscablePor: data.buscablePor
    };
  }
};

export {type CAE, CAEConverter};
