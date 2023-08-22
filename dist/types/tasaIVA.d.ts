interface TasaIVA {
    id: string;
    nombre: string;
    sigla: string;
    valor: number;
    cfeDgi: "Basic" | "Exp" | "Min" | "Exe" | "Otro" | "";
    activoProductos: boolean;
    activoServicios: boolean;
    ultimaEdicion: number;
}
declare const tasaConverter: {
    toFirestore(tasa: TasaIVA): TasaIVA;
    fromFirestore(snapshot: any): TasaIVA;
};
export { type TasaIVA, tasaConverter };
