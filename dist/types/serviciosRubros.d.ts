interface ServiciosRubro {
    version: number;
    id: string;
    codigo: string;
    nombre: string;
    padreId: string | null;
    nombreCompleto: string;
    activo: boolean;
    esHoja: boolean;
    ultimaEdicion: number;
}
declare const serviciosRubroConverter: {
    toFirestore(servicioRubros: ServiciosRubro): ServiciosRubro;
    fromFirestore(snapshot: any): ServiciosRubro;
};
export { type ServiciosRubro, serviciosRubroConverter };
