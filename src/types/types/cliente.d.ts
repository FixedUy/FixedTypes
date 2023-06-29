import { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
import { ServiciosListasPrecio } from "./serviciosListasPrecio";
declare class Cliente {
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
    constructor(id: string, tipoDocumento: number, documento: string, razonSocial: string, pais: string, nombreComercial: string, direccion: string, localidad: string, departamento: string, direccionEntrega: string, descuento: string, emails: string[], mailDgi: string, mailCopiaXml: string, vendedores: [], listaPrecioServicios: ServiciosListasPrecio[] | null, esProveedor: boolean, esCliente: boolean, activo: boolean);
}
declare const clienteConverter: {
    toFirestore(cliente: Cliente): DocumentData;
    fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Cliente;
};
export { Cliente, clienteConverter };
