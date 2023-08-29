export declare enum Permisos {
    ListarVentas = "vl",
    CrearVentas = "vc",
    ExportarVentas = "ve",
    CrearServicios = "sc",
    ListarServicios = "sl",
    CrearRubros = "qc",
    CrearProductos = "pc",
    ListarProductos = "pl",
    ListarCompras = "cl",
    CrearCompras = "cc",
    ExportarCompras = "ce",
    CrearComprasRubros = "bc",
    ListarClientes = "ll",
    CrearClientes = "lc",
    ExportarClientes = "le",
    ListarProveedores = "rl",
    CrearProveedores = "rc",
    ExportarProveedores = "re",
    ListarRecibosClientes = "il",
    CrearRecibosClientes = "ic",
    ExportarRecibosClientes = "ie",
    ListarRecibosProveedores = "el",
    CrearRecibosProveedores = "ec",
    ExportarRecibosProveedores = "ee",
    CambiarCotizacion = "o",
    ListarCuentasCorrientesClientes = "ul",
    ExportarCuentasCorrientesClientes = "ue",
    AjustarCuentasCorrientesClientes = "ua",
    ListarCuentasCorrientesProveedores = "nl",
    ExportarCuentasCorrientesProveedores = "ne",
    AjustarCuentasCorrientesProveedores = "na",
    Estadisticas = "a",
    ListarCentroCostos = "wl",
    CrearCentroCostos = "wc",
    ListarDocumentos = "xl",
    AfectarDocumentos = "xa",
    ListarBoletaCompra = "zl",
    CrearBoletaCompra = "zc",
    ListarRemitos = "dl",
    CrearRemitosIngreso = "di",
    CrearRemitosTransferencia = "dt",
    CrearRemitosSalida = "ds",
    ListarResguardos = "fl",
    CrearResguardos = "fc",
    ExportadorPersonalizado = "g",
    ListarStock = "hl",
    ExportarStock = "he",
    AjustarStock = "ha",
    Importador = "j",
    ListarListasPrecio = "kl",
    CrearListasPrecio = "kc",
    Caja = "t",
    ListarCFERecibidos = "u"
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
