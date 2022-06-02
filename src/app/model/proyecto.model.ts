export class proyecto{

    id_proyecto?: number;
    tipo: String;
    nombre: String;
    descripcion: String;
    tecnologias: String;
    github_link: String;

    constructor(tipo: String,
        nombre: String,
        descripcion: String,
        tecnologias: String,
        github_link: String){
            this.tipo = tipo;
            this.nombre = nombre;
            this.descripcion = descripcion;
            this.tecnologias = tecnologias;
            this.github_link = github_link;
        }
}