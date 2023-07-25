"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movimientoCCConverter = exports.movimientoSuma = exports.TipoMovimiento = void 0;
var TipoMovimiento;
(function (TipoMovimiento) {
    TipoMovimiento[TipoMovimiento["Compra"] = 0] = "Compra";
    TipoMovimiento[TipoMovimiento["CompraNotaCredito"] = 1] = "CompraNotaCredito";
    TipoMovimiento[TipoMovimiento["Venta"] = 2] = "Venta";
    TipoMovimiento[TipoMovimiento["VentaNotaCredito"] = 3] = "VentaNotaCredito";
    TipoMovimiento[TipoMovimiento["VentaNotaDebito"] = 4] = "VentaNotaDebito";
    TipoMovimiento[TipoMovimiento["Recibo"] = 5] = "Recibo";
    TipoMovimiento[TipoMovimiento["ReciboCompra"] = 6] = "ReciboCompra";
    TipoMovimiento[TipoMovimiento["AjusteAgregarDeudaCliente"] = 7] = "AjusteAgregarDeudaCliente";
    TipoMovimiento[TipoMovimiento["AjusteQuitarDeudaCliente"] = 8] = "AjusteQuitarDeudaCliente";
    TipoMovimiento[TipoMovimiento["AjusteAgregarDeudaProveedor"] = 9] = "AjusteAgregarDeudaProveedor";
    TipoMovimiento[TipoMovimiento["AjusteQuitarDeudaProveedor"] = 10] = "AjusteQuitarDeudaProveedor";
})(TipoMovimiento = exports.TipoMovimiento || (exports.TipoMovimiento = {}));
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
        return {};
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
            importe: data.importe,
            saldo: data.saldo,
            descripcion: data.descripcion,
            documentoId: data.documentoId,
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
