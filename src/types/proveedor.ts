import {ServiciosListasPrecio} from "./serviciosListasPrecio";

interface Proveedor {
  id: string;
  tipoDocumento: number;
  documento: string;
  razonSocial: string;
  pais: string;
  nombreComercial: string;
  direccion: string;
  localidad: string;
  departamento: string;
  direccionEntrega: string;
  descuento: string;
  emails: string[];
  mailDgi: string;
  mailCopiaXml: string;
  rubroCompraId: string;
  listaPrecioServicios: ServiciosListasPrecio[] | null;
  formaDePago: string[];
  esProveedor: boolean;
  esCliente: boolean;
  activo: boolean;
  campoExtra: {[key: string]: string};
  saldoCuentas: {[key: string]: number};
  buscablePor: null | string[];
}

const proveedorConverter = {
  toFirestore(proveedor: Proveedor) {
    return proveedor;
  },
  fromFirestore(snapshot: any): Proveedor {
    const data = snapshot.data()!;
    return {
      id: snapshot.id,
      tipoDocumento: data.tipoDocumento,
      documento: data.documento,
      razonSocial: data.razonSocial,
      pais: data.pais,
      nombreComercial: data.nombreComercial,
      direccion: data.direccion,
      localidad: data.localidad,
      departamento: data.departamento,
      direccionEntrega: data.direccionEntrega,
      descuento: data.descuento,
      emails: data.emails,
      mailDgi: data.mailDgi,
      mailCopiaXml: data.mailCopiaXml,
      rubroCompraId: data.rubroCompraId,
      listaPrecioServicios: data.listaPrecioServicios,
      formaDePago: data.formaDePago,
      esProveedor: data.esProveedor,
      esCliente: data.esCliente,
      activo: data.activo,
      campoExtra: data.campoExtra ?? {},
      saldoCuentas: data.saldoCuentas ?? {},
      buscablePor: data.buscablePor
    };
  }
};

export {type Proveedor, proveedorConverter};
