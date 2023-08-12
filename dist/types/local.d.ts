interface Local {
    id: string;
    nombreComercial: string;
    nombre: string;
    direccion: string;
    localidad: string;
    departamento: string;
    codigoDgi: number;
    logo: string;
    logoURL: string;
    activo: boolean;
    ultimaEdicion: number;
}
declare const localConverter: {
    toFirestore(local: Local): Local;
    fromFirestore(snapshot: any): Local;
};
export { type Local, localConverter };
