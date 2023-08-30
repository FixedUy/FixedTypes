import { OpcionesCompras } from "./opcionesCompras";
import { OpcionesGenerales } from "./opcionesGenerales";
import { OpcionesGeneralesProductos } from "./opcionesGeneralesProductos";
import { OpcionesGeneralesServicios } from "./opcionesGeneralesServicios";
import { OpcionesVentaRol } from "./opcionesVentaRol";
interface Empresa {
    id: string;
    version: number;
    nombreComercial: string;
    rut: string;
    razonSocial: string;
    logoURL: string;
    opcionesGenerales: OpcionesGenerales;
    opcionesCompras: OpcionesCompras;
    opcionesGeneralesServicios: OpcionesGeneralesServicios;
    opcionesGeneralesProductos: OpcionesGeneralesProductos;
    opcionesVenta: {
        [key: string]: OpcionesVentaRol;
    };
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
