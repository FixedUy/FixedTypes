export interface CompraEliminar {
    compraId: string;
    lotesABorrar: Array<{
        loteId: string;
        productoId: string;
    }>;
    fichaABorrar: Array<{
        data: string;
        productoId: string;
    }>;
    productosAjustar: Array<{
        productoId: string;
        localId: string;
        cantidad: number;
    }>;
}
