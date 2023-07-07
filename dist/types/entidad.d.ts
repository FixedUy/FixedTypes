import { ServiciosListasPrecio } from "./serviciosListasPrecio";
interface Entidad {
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
    campoExtra: {
        [key: string]: string;
    };
    saldoCuentas: {
        [key: string]: number;
    };
}
declare const entidadConverter: {
    toFirestore(cliente: Entidad): {};
    fromFirestore(snapshot: any): Entidad;
};
export { type Entidad, entidadConverter };
