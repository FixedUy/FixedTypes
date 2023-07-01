class ServiciosPrecios {
    id;
    nombre;
    tasa;
    precioSinIva;
    precioConIva;
    moneda;
    precioArbitrario;
    constructor(id, nombre, tasa, precioSinIva, precioConIva, moneda, precioArbitrario) {
        this.id = id;
        this.nombre = nombre;
        this.tasa = tasa;
        this.precioSinIva = precioSinIva;
        this.precioConIva = precioConIva;
        this.moneda = moneda;
        this.precioArbitrario = precioArbitrario;
    }
}
const ServiciosPreciosConverter = {
    toFirestore(serviciosPreciosAux) {
        return {
            id: serviciosPreciosAux.id,
            nombre: serviciosPreciosAux.nombre,
            tasa: serviciosPreciosAux.tasa,
            precioSinIva: serviciosPreciosAux.precioSinIva,
            precioConIva: serviciosPreciosAux.precioConIva,
            moneda: serviciosPreciosAux.moneda,
            precioArbitrario: serviciosPreciosAux.precioArbitrario,
        };
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return new ServiciosPrecios(data.id, data.nombre, data.tasa, data.precioSinIva, data.precioConIva, data.moneda, data.precioArbitrario);
    },
};
export { ServiciosPrecios, ServiciosPreciosConverter };
