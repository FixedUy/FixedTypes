type EnumDictionary<T extends string, U> = {
  [K in T]: U;
};

export enum CajaTipoMovimiento {
  Compra = "compra", // compra creada a un proveedor
  CompraNotaCredito = "compranotacredito",
  Venta = "venta", // creada venta a un cliente
  VentaNotaCredito = "ventanotacredito", // creada nota de credito a un cliente
  VentaNotaDebito = "ventanotadebito", // creada nota de débito a un cliente
  AjusteAgregar = "ajusteagregar",
  AjusteQuitar = "ajustequitar"
}

export const movimientoSumaCaja: EnumDictionary<string, boolean> = {
  [CajaTipoMovimiento.Compra]: false,
  [CajaTipoMovimiento.CompraNotaCredito]: true,
  [CajaTipoMovimiento.Venta]: true,
  [CajaTipoMovimiento.VentaNotaCredito]: false,
  [CajaTipoMovimiento.VentaNotaDebito]: true,
  [CajaTipoMovimiento.AjusteAgregar]: true,
  [CajaTipoMovimiento.AjusteQuitar]: false
};

interface CajaMovimiento {
  version: number;
  id: string;
  autor: string;
  fechaCreacion: number;
  monto: number;
  saldo: number;
  idMedio: string;
  idMoneda: string;
  detalleMovimiento: string;
  tipo: CajaTipoMovimiento;
  idDocumento: string;
}

const CajaMovimientoConverter = {
  toFirestore(compra: CajaMovimiento) {
    return {};
  },
  fromFirestore(snapshot: any): CajaMovimiento {
    const data = snapshot.data()!;

    let tipo: CajaTipoMovimiento | null = null;
    const tipoString = data.tipo;
    if (tipoString === "compra") {
      tipo = CajaTipoMovimiento.Compra;
    } else if (tipoString === "compranotacredito") {
      tipo = CajaTipoMovimiento.CompraNotaCredito;
    } else if (tipoString === "venta") {
      tipo = CajaTipoMovimiento.Venta;
    } else if (tipoString === "ventanotacredito") {
      tipo = CajaTipoMovimiento.VentaNotaCredito;
    } else if (tipoString === "ventanotadebito") {
      tipo = CajaTipoMovimiento.VentaNotaDebito;
    } else if (tipoString === "ajusteagregar") {
      tipo = CajaTipoMovimiento.AjusteAgregar;
    } else if (tipoString === "ajustequitar") {
      tipo = CajaTipoMovimiento.AjusteQuitar;
    }

    return {
      version: data.version,
      id: snapshot.id,
      autor: data.autor,
      fechaCreacion: data.fechaCreacion,
      monto: data.monto,
      saldo: data.saldo,
      idMedio: data.idMedio,
      idMoneda: data.idMoneda,
      detalleMovimiento: data.detalleMovimiento,
      tipo: tipo,
      idDocumento: data.idDocumento
    };
  }
};

export {type CajaMovimiento, CajaMovimientoConverter};
