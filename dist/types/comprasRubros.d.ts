interface ComprasRubro {
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
declare const comprasRubroConverter: {
    toFirestore(comprasRubros: ComprasRubro): ComprasRubro;
    fromFirestore(snapshot: any): ComprasRubro;
};
export { type ComprasRubro, comprasRubroConverter };
