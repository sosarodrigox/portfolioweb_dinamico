export class experiencia {

    id_exp?: number;
    organizacion: String;
    puesto: String;
    fechaDesde: String;
    fechaHasta: String;
    descTareas: String;
    imgLogo: String;

    constructor(
        organizacion: String,
        puesto: String,
        fechaDesde: String,
        fechaHasta: String,
        descTareas: String,
        imgLogo: String) {
        this.organizacion = organizacion;
        this.puesto = puesto;
        this.fechaDesde = fechaDesde;
        this.fechaHasta = fechaHasta;
        this.descTareas = descTareas;
        this.imgLogo = imgLogo;
    }
}