interface InterfazDocCancela {
  idUsuario: string;
  fecha: number;
  cancelante: string;
  cancelado: string;
  nroLineaCancelante: number;
  nroLineaCancelado: number;
  cantidad: number;
  importe: number;
}

const InterfazDocCancelaConverter = {
  toFirestore(interfazDocCancela: InterfazDocCancela) {
    return interfazDocCancela;
  },
  fromFirestore(snapshot: any): InterfazDocCancela {
    const data = snapshot.data()!;
    return {
      idUsuario: data.idUsuario,
      fecha: data.fecha,
      cancelante: data.cancelante,
      cancelado: data.cancelado,
      nroLineaCancelante: data.nroLineaCancelante,
      nroLineaCancelado: data.nroLineaCancelado,
      cantidad: data.cantidad,
      importe: data.importe
    };
  }
};

export {type InterfazDocCancela, InterfazDocCancelaConverter};
