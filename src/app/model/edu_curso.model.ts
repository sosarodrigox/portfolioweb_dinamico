export class edu_curso {

    id_curso?: number;
    institucion: String;
    nom_curso: String;
    descripcion: String;
    duracion: String;
    fecha_inicio: String;
    img_logo: String;

    constructor(institucion: String,
        nom_curso: String,
        descripcion: String,
        duracion: String,
        fecha_inicio: String,
        img_logo: String) {
        this.institucion = institucion;
        this.nom_curso = nom_curso;
        this.descripcion = descripcion;
        this.duracion = duracion;
        this.fecha_inicio = fecha_inicio;
        this.img_logo = img_logo;
    }
}