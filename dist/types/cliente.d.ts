import { ServiciosListasPrecio } from "./serviciosListasPrecio";
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
    rubroId: string;
    listaPrecioServicios: ServiciosListasPrecio[] | null;
    formaDePago: string;
    esProveedor: boolean;
    esCliente: boolean;
    activo: boolean;
    campoExtra: {
        [key: string]: string;
    };
    saldoCuentas: {
        [key: string]: number;
    };
    buscablePor: null | string[];
}
declare const clienteConverter: {
    toFirestore(cliente: Cliente): Cliente;
    fromFirestore(snapshot: any): Cliente;
};
export { type Cliente, clienteConverter };
