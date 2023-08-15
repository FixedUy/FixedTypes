import { Producto } from "./producto";
import { Servicio } from "./servicio";
interface RemitoItemFormulario {
    tipo: "producto" | "servicio";
    cantidad: number;
    item: Producto | Servicio;
}
export { type RemitoItemFormulario };
