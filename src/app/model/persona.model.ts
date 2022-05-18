export class persona{

    id?:number; //Al declararlo con el "?" indico que este dato no es necesario (Se autogenera en la BBDD)
    nombre: String;
    apellido: String;
    posicion: String;
    ubicacion: String;
    nom_usuario: String;
    img_usuario: String;
    img_perfil: String;
    email: String;
    link_cv: String;
    link_github: String;
    link_linkedin: String;
    titulo_slide1: String;
    desc_slide1: String;
    titulo_slide2: String;
    desc_slide2: String;
    titulo_slide3: String;
    desc_slide3: String;
    acerca_de_mi: String;
    me_interesa: String;
    hobbies: String;

    constructor(nombre: String,
                apellido: String,
                posicion: String,
                ubicacion: String,
                nom_usuario: String,
                img_usuario: String,
                img_perfil: String,
                email: String,
                link_cv: String,
                link_github: String,
                link_linkedin: String,
                titulo_slide1: String,
                desc_slide1: String,
                titulo_slide2: String,
                desc_slide2: String,
                titulo_slide3: String,
                desc_slide3: String,
                acerca_de_mi: String,
                me_interesa: String,
                hobbies: String,)
                {
                    this.nombre = nombre;
                    this.apellido = apellido;
                    this.posicion = posicion;
                    this.ubicacion = ubicacion;
                    this.nom_usuario = nom_usuario;
                    this.img_usuario = img_usuario;
                    this.img_perfil = img_perfil;
                    this.email = email;
                    this.link_cv = link_cv;
                    this.link_github = link_github;
                    this.link_linkedin = link_linkedin;
                    this.titulo_slide1 = titulo_slide1;
                    this.desc_slide1 = desc_slide1;
                    this.titulo_slide2 = titulo_slide2;
                    this.desc_slide2 = desc_slide2;
                    this.titulo_slide3 = titulo_slide3;
                    this.desc_slide3 = desc_slide3;
                    this.acerca_de_mi = acerca_de_mi;
                    this.me_interesa = me_interesa;
                    this.hobbies = hobbies;
                }
}