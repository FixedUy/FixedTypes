interface CAE {
    version: number;
    id: string;
    fechaCreacion: number;
    ruce: number;
    tcfe: number;
    serie: string;
    desdeNumero: string;
    hastaNumero: string;
    numeroAutorizacion: string;
    fechaAutorizacion: string;
    fechaVencimiento: string;
    caeEspecial: string;
    usuarioCreador: string;
    xml: string;
}
declare const CAEConverter: {
    toFirestore(cae: CAE): CAE;
    fromFirestore(snapshot: any): CAE;
};
export { type CAE, CAEConverter };
