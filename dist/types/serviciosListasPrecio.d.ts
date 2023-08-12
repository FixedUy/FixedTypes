interface ServiciosListasPrecio {
    version: number;
    id: string;
    nombre: string;
    locales: string[];
    clonarId: string;
    activo: boolean;
    ultimaEdicion: number;
}
declare const serviciosListasPrecioConverter: {
    toFirestore(servicioListaPrecio: ServiciosListasPrecio): ServiciosListasPrecio;
    fromFirestore(snapshot: any): ServiciosListasPrecio;
};
export { type ServiciosListasPrecio, serviciosListasPrecioConverter };
