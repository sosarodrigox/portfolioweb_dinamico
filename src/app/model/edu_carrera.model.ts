export class edu_carrera {

    id_carrera?: number;
    universidad: String;
    carrera: String;
    link_info: String;
    fecha_inicio: String;
    fecha_fin: String;
    img_logo: String;

    constructor(
        universidad: String,
        carrera: String,
        link_info: String,
        fecha_inicio: String,
        fecha_fin: String,
        img_logo: String) {
        this.universidad = universidad;
        this.carrera = carrera;
        this.link_info = link_info;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.img_logo = img_logo;
    }
}