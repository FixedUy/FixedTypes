import {MecanismosEnvioMails} from "./mecanismosEnvioMails";
import {OpcionesCompras} from "./opcionesCompras";
import {OpcionesGenerales} from "./opcionesGenerales";
import {OpcionesGeneralesProductos} from "./opcionesGeneralesProductos";
import {OpcionesGeneralesServicios} from "./opcionesGeneralesServicios";
import {OpcionesVentaRol} from "./opcionesVentaRol";

interface Empresa {
  id: string;
  version: number;
  nombreComercial: string;
  rut: string;
  razonSocial: string;
  logoURL: string;
  mecanismosEnvioMails: MecanismosEnvioMails[];
  opcionesGenerales: OpcionesGenerales;
  opcionesCompras: OpcionesCompras;
  opcionesGeneralesServicios: OpcionesGeneralesServicios;
  opcionesGeneralesProductos: OpcionesGeneralesProductos;
  opcionesVenta: {[key: string]: OpcionesVentaRol};
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

const empresaConverter = {
  toFirestore(empresa: Empresa) {
    return empresa;
  },
  fromFirestore(snapshot: any): Empresa {
    const data = snapshot.data()!;
    return {
      id: data.id,
      version: data.version,
      nombreComercial: data.nombreComercial,
      rut: data.rut,
      razonSocial: data.razonSocial,
      logoURL: data.logoURL,
      mecanismosEnvioMails: data.mecanismosEnvioMails,
      opcionesGenerales: data.opcionesGenerales,
      opcionesCompras: data.opcionesCompras,
      opcionesGeneralesProductos: data.opcionesGeneralesProductos,
      opcionesGeneralesServicios: data.opcionesGeneralesServicios,
      opcionesVenta: data.opcionesVenta,
      domicilio: data.domicilio,
      localidad: data.localidad,
      departamento: data.departamento,
      celular: data.celular,
      tieneCedula: data.tieneCedula,
      cedula: data.cedula,
      documentoExtranjero: data.documentoExtranjero,
      primerNombre: data.primerNombre,
      segundoNombre: data.segundoNombre,
      primerApellido: data.primerApellido,
      segundoApellido: data.segundoApellido,
      tieneContador: data.tieneContador,
      contadorNombre: data.contadorNombre,
      contadorMail: data.contadorMail,
      contadorTelefono: data.contadorTelefono
    };
  }
};

export {type Empresa, empresaConverter};
