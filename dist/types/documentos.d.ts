import { InterfazDocCancela } from "./intefazDocCancela";
import { InterfazPendienteCantidad } from "./interfazPendienteCantidad";
import { InterfazPendienteImporte } from "./interfazPendienteImporte";
import { InterfazTipoCancelacion } from "./interfazTipoCancelacion";
interface Documento {
    version: number;
    id: string;
    tipoDocumento: "venta" | "ventaNotaCredito" | "ventaNotaDebito" | "ajuste" | "compra" | "compraNotaCredito" | "reciboProveedor" | "reciboCliente";
    documentoId: string;
    fechaComprobante: number;
    fechaComprobanteString: string;
    fechaCreacion: number;
    comprobante: string;
    entidadId: string;
    entidadNombre: string;
    cancelado: boolean;
    cancelo: boolean;
    pendienteCancelarCantidad: InterfazPendienteCantidad[];
    disponibleCancelarCantidad: InterfazPendienteCantidad[];
    pendienteCancelarImporte: InterfazPendienteImporte[];
    disponibleCancelarImporte: InterfazPendienteImporte[];
    importe: number;
    importePendiente: number;
    importeDisponible: number;
    canceladoPor: string[];
    cancela: string[];
    tipoCancelacionRecibida: InterfazTipoCancelacion[];
    tipoCancelacionRealizada: InterfazTipoCancelacion[];
    relacionCancelacionesRealizada: InterfazDocCancela[];
    relacionCancelacionesRecibida: InterfazDocCancela[];
}
declare const DocumentoConverter: {
    toFirestore(documento: Documento): Documento;
    fromFirestore(snapshot: any): Documento;
};
export { type Documento, DocumentoConverter };
