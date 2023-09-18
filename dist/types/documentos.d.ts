import { InterfazDocCancela } from "./IntefazDocCancela";
import { InterfazPendienteCantidad } from "./InterfazPendienteCantidad";
import { InterfazPendienteImporte } from "./interfazPendienteImporte";
interface Documento {
    version: number;
    id: string;
    tipoDocumento: "venta" | "ventaNotaCredito" | "ventaNotaDebito" | "ajuste" | "compra" | "compraNotaCredito";
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
    tipoCancelacionRecibida: "cantidad" | "importe" | null;
    tipoCancelacionRealizada: "cantidad" | "importe" | null;
    relacionCancelacionesRealizada: InterfazDocCancela[];
    relacionCancelacionesRecibida: InterfazDocCancela[];
}
declare const DocumentoConverter: {
    toFirestore(documento: Documento): Documento;
    fromFirestore(snapshot: any): Documento;
};
export { type Documento, DocumentoConverter };
