import {ServiciosListasPrecio} from "./serviciosListasPrecio";

interface Cliente {
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
  vendedorId: string;
  rubroServiciosVentaId: string;
  listaPrecioServicios: null | string[];
  formaDePago: string;
  esProveedor: boolean;
  esCliente: boolean;
  activo: boolean;
  campoExtra: {[key: string]: string};
  saldoCuentas: {[key: string]: number};
  buscablePor: null | string[];
}

const clienteConverter = {
  toFirestore(cliente: Cliente) {
    return cliente;
  },
  fromFirestore(snapshot: any): Cliente {
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
      vendedorId: data.vendedorId,
      rubroServiciosVentaId: data.rubroServiciosVentaId,
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

export {type Cliente, clienteConverter};
