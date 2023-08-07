interface ServiciosPrecios {
    idLista: string;
    tasa: string;
    precioSinIva: number;
    precioConIva: number;
    moneda: string;
    precioArbitrario: boolean;
}
declare const serviciosPreciosConverter: {
    toFirestore(lista: ServiciosPrecios): {
        idLista: string;
        tasa: string;
        precioSinIva: number;
        precioConIva: number;
        moneda: string;
        precioArbitrario: boolean;
    };
    fromFirestore(snapshot: any): ServiciosPrecios;
};
export { type ServiciosPrecios, serviciosPreciosConverter };
