import { OpcionesGenerales } from "./opcionesGenerales";
interface Empresa {
    id: string;
    version: number;
    nombreComercial: string;
    rut: string;
    razonSocial: string;
    logoURL: string;
    opcionesGenerales: OpcionesGenerales;
    domicilio: string;
    localidad: string;
    departamento: string;
    celular: string;
    tieneCedula: boolean;
    cedula: string;
    documentoExtranjero: string;
    primerNombre: string;
    segundoNombre: string;
    primerApellido: string;
    segundoApellido: string;
    tieneContador: boolean;
    contadorNombre: string;
    contadorMail: string;
    contadorTelefono: string;
}
declare const empresaConverter: {
    toFirestore(empresa: Empresa): Empresa;
    fromFirestore(snapshot: any): Empresa;
};
export { type Empresa, empresaConverter };
