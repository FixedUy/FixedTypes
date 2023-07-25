"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movimientoSuma = exports.MovimientoCuentaCorrienteTipo = void 0;
var MovimientoCuentaCorrienteTipo;
(function (MovimientoCuentaCorrienteTipo) {
    MovimientoCuentaCorrienteTipo[MovimientoCuentaCorrienteTipo["Compra"] = 0] = "Compra";
    MovimientoCuentaCorrienteTipo[MovimientoCuentaCorrienteTipo["CompraNotaCredito"] = 1] = "CompraNotaCredito";
    MovimientoCuentaCorrienteTipo[MovimientoCuentaCorrienteTipo["Venta"] = 2] = "Venta";
    MovimientoCuentaCorrienteTipo[MovimientoCuentaCorrienteTipo["VentaNotaCredito"] = 3] = "VentaNotaCredito";
    MovimientoCuentaCorrienteTipo[MovimientoCuentaCorrienteTipo["VentaNotaDebito"] = 4] = "VentaNotaDebito";
    MovimientoCuentaCorrienteTipo[MovimientoCuentaCorrienteTipo["Recibo"] = 5] = "Recibo";
    MovimientoCuentaCorrienteTipo[MovimientoCuentaCorrienteTipo["ReciboCompra"] = 6] = "ReciboCompra";
    MovimientoCuentaCorrienteTipo[MovimientoCuentaCorrienteTipo["AjusteAgregarDeudaCliente"] = 7] = "AjusteAgregarDeudaCliente";
    MovimientoCuentaCorrienteTipo[MovimientoCuentaCorrienteTipo["AjusteQuitarDeudaCliente"] = 8] = "AjusteQuitarDeudaCliente";
    MovimientoCuentaCorrienteTipo[MovimientoCuentaCorrienteTipo["AjusteAgregarDeudaProveedor"] = 9] = "AjusteAgregarDeudaProveedor";
    MovimientoCuentaCorrienteTipo[MovimientoCuentaCorrienteTipo["AjusteQuitarDeudaProveedor"] = 10] = "AjusteQuitarDeudaProveedor";
})(MovimientoCuentaCorrienteTipo = exports.MovimientoCuentaCorrienteTipo || (exports.MovimientoCuentaCorrienteTipo = {}));
exports.movimientoSuma = {
    [MovimientoCuentaCorrienteTipo.Compra]: false,
    [MovimientoCuentaCorrienteTipo.CompraNotaCredito]: true,
    [MovimientoCuentaCorrienteTipo.Venta]: true,
    [MovimientoCuentaCorrienteTipo.VentaNotaCredito]: false,
    [MovimientoCuentaCorrienteTipo.VentaNotaDebito]: true,
    [MovimientoCuentaCorrienteTipo.Recibo]: true,
    [MovimientoCuentaCorrienteTipo.ReciboCompra]: false,
    [MovimientoCuentaCorrienteTipo.AjusteAgregarDeudaCliente]: true,
    [MovimientoCuentaCorrienteTipo.AjusteQuitarDeudaCliente]: false,
    [MovimientoCuentaCorrienteTipo.AjusteAgregarDeudaProveedor]: false,
    [MovimientoCuentaCorrienteTipo.AjusteQuitarDeudaProveedor]: true
};
