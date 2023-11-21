import { Producto } from "../producto";
export interface AfectarStockAgregar {
    producto: Producto;
    cantidadAgregar: number;
    idSucursal: string;
    costoUnit: number;
    monedaId: string;
    tasaIvaId: string;
}
