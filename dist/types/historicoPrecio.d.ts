interface HistoricoPrecio {
    idProducto: string;
    idLista: string;
    fechaNumero: number;
    fechaString: string;
    moneda: string;
    precioSinIVA: number;
    precioConIVA: number;
    tasaIVA: string;
    arbitrario: boolean;
    idUsuario: string;
    origenCambio: string;
    idEmpresa: string;
}
declare const historicoPrecioConverter: {
    toFirestore(historicoPrecio: HistoricoPrecio): HistoricoPrecio;
    fromFirestore(snapshot: any): HistoricoPrecio;
};
export { type HistoricoPrecio, historicoPrecioConverter };
