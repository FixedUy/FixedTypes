interface InterfazTipoCancelacion {
  documentoId: string;
  tipoCancelacion: "cantidad" | "importe" | "recibo";
}

const InterfazTipoCancelacionConverter = {
  toFirestore(documento: InterfazTipoCancelacion) {
    return documento;
  },
  fromFirestore(snapshot: any): InterfazTipoCancelacion {
    const data = snapshot.data()!;
    return {
      documentoId: data.documentoId,
      tipoCancelacion: data.tipoCancelacion
    };
  }
};

export {type InterfazTipoCancelacion, InterfazTipoCancelacionConverter};
