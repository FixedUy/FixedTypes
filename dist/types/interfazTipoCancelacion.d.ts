interface InterfazTipoCancelacion {
    documentoId: string;
    tipoCancelacion: "cantidad" | "importe" | "recibo";
}
declare const InterfazTipoCancelacionConverter: {
    toFirestore(documento: InterfazTipoCancelacion): InterfazTipoCancelacion;
    fromFirestore(snapshot: any): InterfazTipoCancelacion;
};
export { type InterfazTipoCancelacion, InterfazTipoCancelacionConverter };
