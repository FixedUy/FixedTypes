export declare enum Permisos {
    ListarVentas = "vl",
    ExportarVentas = "ve",
    CrearProductos = "pc",
    ListarProductos = "pl",
    CrearServicios = "sc",
    ListarServicios = "sl"
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
