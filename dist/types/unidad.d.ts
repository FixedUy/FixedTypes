interface Unidad {
    version: number;
    id: string;
    nombre: string;
    activo: boolean;
    ultimaEdicion: number;
}
declare const UnidadConverter: {
    toFirestore(unidad: Unidad): Unidad;
    fromFirestore(snapshot: any): Unidad;
};
export { type Unidad, UnidadConverter };
