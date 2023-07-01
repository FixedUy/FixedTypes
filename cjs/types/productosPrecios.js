class ProductosPrecios {
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
const ProductosPreciosConverter = {
    toFirestore(productosPreciosAux) {
        return {
            id: productosPreciosAux.id,
            nombre: productosPreciosAux.nombre,
            tasa: productosPreciosAux.tasa,
            precioSinIva: productosPreciosAux.precioSinIva,
            precioConIva: productosPreciosAux.precioConIva,
            moneda: productosPreciosAux.moneda,
            precioArbitrario: productosPreciosAux.precioArbitrario,
        };
    },
    fromFirestore(snapshot) {
        const data = snapshot.data();
        return new ProductosPrecios(data.id, data.nombre, data.tasa, data.precioSinIva, data.precioConIva, data.moneda, data.precioArbitrario);
    },
};
export { ProductosPrecios, ProductosPreciosConverter };
