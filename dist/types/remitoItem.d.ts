import { Producto } from "./producto";
import { Servicio } from "./servicio";
interface RemitoItem {
    item: Producto | Servicio;
    cantidad: number;
}
export { type RemitoItem };
