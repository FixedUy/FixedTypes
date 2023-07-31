type EnumDictionary<T extends string | symbol | number, U> = {
  [K in T]: U;
};

export enum TipoMovimiento {
  Compra = "compra", // compra creada a un proveedor
  CompraNotaCredito = "compranotacredito",
  Venta = "venta", // creada venta a un cliente
  VentaNotaCredito = "ventanotacredito", // creada nota de credito a un cliente
  VentaNotaDebito = "ventanotadebito", // creada nota de débito a un cliente
  Recibo = "recibo", // recibo de cobranza a un cliente emitido
  ReciboCompra = "recibocompra", // recibo de pago a un proveedor
  AjusteAgregarDeudaCliente = "ajusteagregardeudacliente",
  AjusteQuitarDeudaCliente = "ajustequitardeudacliente",
  AjusteAgregarDeudaProveedor = "ajusteagregardeudaproveedor",
  AjusteQuitarDeudaProveedor = "ajustequitardeudaproveedor"
}

export const movimientoSuma: EnumDictionary<TipoMovimiento, boolean> = {
  [TipoMovimiento.Compra]: false,
  [TipoMovimiento.CompraNotaCredito]: true,
  [TipoMovimiento.Venta]: true,
  [TipoMovimiento.VentaNotaCredito]: false,
  [TipoMovimiento.VentaNotaDebito]: true,
  [TipoMovimiento.Recibo]: true,
  [TipoMovimiento.ReciboCompra]: false,
  [TipoMovimiento.AjusteAgregarDeudaCliente]: true,
  [TipoMovimiento.AjusteQuitarDeudaCliente]: false,
  [TipoMovimiento.AjusteAgregarDeudaProveedor]: false,
  [TipoMovimiento.AjusteQuitarDeudaProveedor]: true
};

interface MovimientoCC {
  id: string;
  version: number;
  idMoneda: string;
  importe: number;
  saldo: number;
  descripcion: string;
  idDocumento: string;
  tipo: TipoMovimiento;
  secuencia: number;
  fecha: number;
  fechaString: string;
  fechaRealizado: number;
  usuario: string;
}

const movimientoCCConverter = {
  toFirestore(movimiento: MovimientoCC) {
    return {};
  },
  fromFirestore(snapshot: any): MovimientoCC {
    const data = snapshot.data()!;

    let tipo: TipoMovimiento | null = null;
    const tipoString = data.tipo;
    if (tipoString === "compra") {
      tipo = TipoMovimiento.Compra;
    } else if (tipoString === "compranotacredito") {
      tipo = TipoMovimiento.CompraNotaCredito;
    } else if (tipoString === "venta") {
      tipo = TipoMovimiento.Venta;
    } else if (tipoString === "ventanotacredito") {
      tipo = TipoMovimiento.VentaNotaCredito;
    } else if (tipoString === "ventanotadebito") {
      tipo = TipoMovimiento.VentaNotaDebito;
    } else if (tipoString === "recibo") {
      tipo = TipoMovimiento.Recibo;
    } else if (tipoString === "recibocompra") {
      tipo = TipoMovimiento.ReciboCompra;
    } else if (tipoString === "ajusteagregardeudacliente") {
      tipo = TipoMovimiento.AjusteAgregarDeudaCliente;
    } else if (tipoString === "ajustequitardeudacliente") {
      tipo = TipoMovimiento.AjusteQuitarDeudaCliente;
    } else if (tipoString === "ajusteagregardeudaproveedor") {
      tipo = TipoMovimiento.AjusteAgregarDeudaProveedor;
    } else if (tipoString === "ajustequitardeudaproveedor") {
      tipo = TipoMovimiento.AjusteQuitarDeudaProveedor;
    }

    return {
      id: snapshot.id,
      version: data.version,
      idMoneda: data.idMoneda,
      importe: data.importe,
      saldo: data.saldo,
      descripcion: data.descripcion,
      idDocumento: data.idDocumento,
      tipo: tipo,
      secuencia: data.secuencia,
      fecha: data.fecha,
      fechaString: data.fechaString,
      fechaRealizado: data.fechaRealizado,
      usuario: data.usuario
    };
  }
};

export {type MovimientoCC, movimientoCCConverter};
