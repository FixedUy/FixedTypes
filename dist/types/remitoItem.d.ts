interface RemitoItem {
    tipo: "producto" | "servicio";
    cantidad: number;
    productoId: string;
    descripcion: string;
    codigo: string;
}
export { type RemitoItem };
