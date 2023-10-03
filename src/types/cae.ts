interface CAE {
  version: number;
  id: string;
  fechaCreacion: number;
  ruce: number;
  tcfe: number;
  serie: string;
  desdeNumero: number;
  hastaNumero: number;
  numeroAutorizacion: number;
  fechaAutorizacion: string;
  fechaVencimiento: string;
  caeEspecial: string;
  usuarioCreador: string;
  xml: string;
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
      desdeNumero: data.desdeNumero,
      hastaNumero: data.hastaNumero,
      numeroAutorizacion: data.numeroAutorizacion,
      fechaAutorizacion: data.fechaAutorizacion,
      fechaVencimiento: data.fechaVencimiento,
      caeEspecial: data.caeEspecial,
      usuarioCreador: data.usuarioCreador,
      xml: data.xml
    };
  }
};

export {type CAE, CAEConverter};
