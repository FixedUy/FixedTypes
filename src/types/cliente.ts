import {
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "firebase/firestore";
import { ServiciosListasPrecio } from "./serviciosListasPrecio";

class Cliente {
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
  vendedores: [];
  listaPrecioServicios: ServiciosListasPrecio[] | null;
  esProveedor: boolean;
  esCliente: boolean;
  activo: boolean;

  constructor(
    id: string,
    tipoDocumento: number,
    documento: string,
    razonSocial: string,
    pais: string,
    nombreComercial: string,
    direccion: string,
    localidad: string,
    departamento: string,
    direccionEntrega: string,
    descuento: string,
    emails: string[],
    mailDgi: string,
    mailCopiaXml: string,
    vendedores: [],
    listaPrecioServicios: ServiciosListasPrecio[] | null,
    esProveedor: boolean,
    esCliente: boolean,
    activo: boolean
  ) {
    this.id = id;
    this.tipoDocumento = tipoDocumento;
    this.documento = documento;
    this.razonSocial = razonSocial;
    this.pais = pais;
    this.nombreComercial = nombreComercial;
    this.direccion = direccion;
    this.localidad = localidad;
    this.departamento = departamento;
    this.direccionEntrega = direccionEntrega;
    this.descuento = descuento;
    this.emails = emails;
    this.mailDgi = mailDgi;
    this.mailCopiaXml = mailCopiaXml;
    this.vendedores = vendedores;
    this.listaPrecioServicios = listaPrecioServicios;
    this.esProveedor = esProveedor;
    this.esCliente = esCliente;
    this.activo = activo;
  }
}

const clienteConverter = {
  toFirestore(cliente: Cliente): DocumentData {
    return {};
  },
  fromFirestore(snapshot: QueryDocumentSnapshot): Cliente {
    const data = snapshot.data()!;
    return new Cliente(
      snapshot.id,
      data.tipoDocumento,
      data.documento,
      data.razonSocial,
      data.pais,
      data.nombreComercial,
      data.direccion,
      data.localidad,
      data.departamento,
      data.direccionEntrega,
      data.descuento,
      data.emails,
      data.mailDgi,
      data.mailCopiaXml,
      data.vendedores,
      data.listaPrecioServicios,
      data.esProveedor,
      data.esCliente,
      data.activo
    );
  },
};

export { Cliente, clienteConverter };
