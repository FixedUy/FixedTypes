"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movimientoSuma = exports.TipoMovimiento = void 0;
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
