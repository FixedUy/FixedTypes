"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movimientoCCConverter = exports.movimientoSuma = exports.TipoMovimiento = void 0;
var TipoMovimiento;
(function (TipoMovimiento) {
    TipoMovimiento["Compra"] = "compra";
    TipoMovimiento["CompraNotaCredito"] = "compranotacredito";
    TipoMovimiento["Venta"] = "venta";
    TipoMovimiento["VentaNotaCredito"] = "ventanotacredito";
    TipoMovimiento["VentaNotaDebito"] = "ventanotadebito";
    TipoMovimiento["Recibo"] = "recibo";
    TipoMovimiento["ReciboCompra"] = "recibocompra";
    TipoMovimiento["AjusteAgregarDeudaCliente"] = "ajusteagregardeudacliente";
    TipoMovimiento["AjusteQuitarDeudaCliente"] = "ajustequitardeudacliente";
    TipoMovimiento["AjusteAgregarDeudaProveedor"] = "ajusteagregardeudaproveedor";
    TipoMovimiento["AjusteQuitarDeudaProveedor"] = "ajustequitardeudaproveedor";
})(TipoMovimiento || (exports.TipoMovimiento = TipoMovimiento = {}));
exports.movimientoSuma = {
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
const movimientoCCConverter = {
    toFirestore(movimiento) {
        return movimiento;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        let tipo = null;
        const tipoString = data.tipo;
        if (tipoString === "compra") {
            tipo = TipoMovimiento.Compra;
        }
        else if (tipoString === "compranotacredito") {
            tipo = TipoMovimiento.CompraNotaCredito;
        }
        else if (tipoString === "venta") {
            tipo = TipoMovimiento.Venta;
        }
        else if (tipoString === "ventanotacredito") {
            tipo = TipoMovimiento.VentaNotaCredito;
        }
        else if (tipoString === "ventanotadebito") {
            tipo = TipoMovimiento.VentaNotaDebito;
        }
        else if (tipoString === "recibo") {
            tipo = TipoMovimiento.Recibo;
        }
        else if (tipoString === "recibocompra") {
            tipo = TipoMovimiento.ReciboCompra;
        }
        else if (tipoString === "ajusteagregardeudacliente") {
            tipo = TipoMovimiento.AjusteAgregarDeudaCliente;
        }
        else if (tipoString === "ajustequitardeudacliente") {
            tipo = TipoMovimiento.AjusteQuitarDeudaCliente;
        }
        else if (tipoString === "ajusteagregardeudaproveedor") {
            tipo = TipoMovimiento.AjusteAgregarDeudaProveedor;
        }
        else if (tipoString === "ajustequitardeudaproveedor") {
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
exports.movimientoCCConverter = movimientoCCConverter;
