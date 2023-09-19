import {InterfazDocCancela} from "./intefazDocCancela";
import {InterfazPendienteCantidad} from "./interfazPendienteCantidad";
import {InterfazPendienteImporte} from "./interfazPendienteImporte";

interface Documento {
  version: number;
  id: string;
  tipoDocumento:
    | "venta"
    | "ventaNotaCredito"
    | "ventaNotaDebito"
    | "ajuste"
    | "compra"
    | "compraNotaCredito";
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

const DocumentoConverter = {
  toFirestore(documento: Documento) {
    return documento;
  },
  fromFirestore(snapshot: any): Documento {
    const data = snapshot.data()!;
    return {
      version: data.version,
      id: snapshot.id,
      tipoDocumento: data.tipoDocumento,
      documentoId: data.documentoId,
      fechaComprobante: data.fechaComprobante,
      fechaComprobanteString: data.fechaComprobanteString,
      fechaCreacion: data.fechaCreacion,
      comprobante: data.comprobante,
      entidadId: data.entidadId,
      entidadNombre: data.entidadNombre,
      cancelado: data.cancelado,
      cancelo: data.cancelo,
      pendienteCancelarCantidad: data.pendienteCancelarCantidad,
      disponibleCancelarCantidad: data.disponibleCancelarCantidad,
      pendienteCancelarImporte: data.pendienteCancelarImporte,
      disponibleCancelarImporte: data.disponibleCancelarImporte,
      importe: data.importe,
      importePendiente: data.importePendiente,
      importeDisponible: data.importeDisponible,
      canceladoPor: data.canceladoPor,
      cancela: data.cancela,
      tipoCancelacionRecibida: data.tipoCancelacionRecibida,
      tipoCancelacionRealizada: data.tipoCancelacionRealizada,
      relacionCancelacionesRealizada: data.relacionCancelacionesRealizada,
      relacionCancelacionesRecibida: data.relacionCancelacionesRecibida
    };
  }
};

export {type Documento, DocumentoConverter};
