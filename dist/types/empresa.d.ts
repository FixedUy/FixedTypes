interface Empresa {
    id: string;
    nombreComercial: string;
    rut: string;
    razonSocial: string;
    logoURL: string;
}
declare const empresaConverter: {
    toFirestore(empresa: Empresa): {
        nombreComercial: string;
    };
    fromFirestore(snapshot: any): Empresa;
};
export { type Empresa, empresaConverter };
