export declare enum Permisos {
    CrearVenta = "vc",
    ListarVentas = "vl",
    ExportarVentas = "ve"
}
interface UsuarioRol {
    id: string;
    rol: string;
    permisos: Permisos[];
}
declare const usuarioRolConverter: {
    toFirestore(rol: UsuarioRol): UsuarioRol;
    fromFirestore(snapshot: any): UsuarioRol;
};
export { type UsuarioRol, usuarioRolConverter };
