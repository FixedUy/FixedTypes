interface InterfazDocCancela {
    cancelante: string;
    cancelado: string;
    nroLineaCancelante: number;
    nroLineaCancelado: number;
    cantidad: number;
    importe: number;
}
declare const InterfazDocCancelaConverter: {
    toFirestore(interfazDocCancela: InterfazDocCancela): InterfazDocCancela;
    fromFirestore(snapshot: any): InterfazDocCancela;
};
export { type InterfazDocCancela, InterfazDocCancelaConverter };
