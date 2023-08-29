interface VentasRubro {
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
declare const ventasRubroConverter: {
    toFirestore(ventasRubros: VentasRubro): VentasRubro;
    fromFirestore(snapshot: any): VentasRubro;
};
export { type VentasRubro, ventasRubroConverter };
