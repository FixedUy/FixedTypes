import { Producto } from "../producto";
export interface AfectarStockQuitar {
    producto: Producto;
    idSucursal: string;
    cantidadQuitar: number;
}
