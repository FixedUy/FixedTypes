"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cajaMovimientoConverter = exports.movimientoSumaCaja = exports.CajaTipoMovimiento = void 0;
var CajaTipoMovimiento;
(function (CajaTipoMovimiento) {
    CajaTipoMovimiento["Compra"] = "compra";
    CajaTipoMovimiento["CompraNotaCredito"] = "compranotacredito";
    CajaTipoMovimiento["Venta"] = "venta";
    CajaTipoMovimiento["VentaNotaCredito"] = "ventanotacredito";
    CajaTipoMovimiento["VentaNotaDebito"] = "ventanotadebito";
    CajaTipoMovimiento["AjusteAgregar"] = "ajusteagregar";
    CajaTipoMovimiento["AjusteQuitar"] = "ajustequitar";
})(CajaTipoMovimiento = exports.CajaTipoMovimiento || (exports.CajaTipoMovimiento = {}));
exports.movimientoSumaCaja = {
    [CajaTipoMovimiento.Compra]: false,
    [CajaTipoMovimiento.CompraNotaCredito]: true,
    [CajaTipoMovimiento.Venta]: true,
    [CajaTipoMovimiento.VentaNotaCredito]: false,
    [CajaTipoMovimiento.VentaNotaDebito]: true,
    [CajaTipoMovimiento.AjusteAgregar]: true,
    [CajaTipoMovimiento.AjusteQuitar]: false
};
const cajaMovimientoConverter = {
    toFirestore(cajaMovimiento) {
        return cajaMovimiento;
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        let tipo = null;
        const tipoString = data.tipo;
        if (tipoString === "compra") {
            tipo = CajaTipoMovimiento.Compra;
        }
        else if (tipoString === "compranotacredito") {
            tipo = CajaTipoMovimiento.CompraNotaCredito;
        }
        else if (tipoString === "venta") {
            tipo = CajaTipoMovimiento.Venta;
        }
        else if (tipoString === "ventanotacredito") {
            tipo = CajaTipoMovimiento.VentaNotaCredito;
        }
        else if (tipoString === "ventanotadebito") {
            tipo = CajaTipoMovimiento.VentaNotaDebito;
        }
        else if (tipoString === "ajusteagregar") {
            tipo = CajaTipoMovimiento.AjusteAgregar;
        }
        else if (tipoString === "ajustequitar") {
            tipo = CajaTipoMovimiento.AjusteQuitar;
        }
        return {
            version: data.version,
            id: snapshot.id,
            autor: data.autor,
            fechaCreacion: data.fechaCreacion,
            saldoMonedas: data.saldoMonedas,
            saldoMedios: data.saldoMedios,
            detalle: data.detalle,
            tipo: tipo,
            idDocumento: data.idDocumento
        };
    }
};
exports.cajaMovimientoConverter = cajaMovimientoConverter;
