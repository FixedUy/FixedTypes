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
declare const CAEConverter: {
    toFirestore(cae: CAE): CAE;
    fromFirestore(snapshot: any): CAE;
};
export { type CAE, CAEConverter };
