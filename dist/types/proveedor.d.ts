import { ServiciosListasPrecio } from "./serviciosListasPrecio";
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
    rubroId: string;
    listaPrecioServicios: ServiciosListasPrecio[] | null;
    formaDePago: string[];
    esProveedor: boolean;
    esCliente: boolean;
    activo: boolean;
    campoExtra: {
        [key: string]: string;
    };
    saldoCuentas: {
        [key: string]: number;
    };
}
declare const proveedorConverter: {
    toFirestore(proveedor: Proveedor): Proveedor;
    fromFirestore(snapshot: any): Proveedor;
};
export { type Proveedor, proveedorConverter };
