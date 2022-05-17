export class persona{
    id?:number; //Al declararlo con el "?" indico que este dato no es necesario (Se autogenera en la BBDD)
    nombre: String;
    apellido: String;
    domicilio: String;
    fechaNac: String;
    telefono: String;
    personacol: String;
    correo: String;
    sobre_mi_bold: String;
    url_foto: String;

    constructor(nombre: String,
                apellido: String,
                domicilio: String,
                fechaNac: String,
                telefono: String,
                personacol: String,
                correo: String,
                sobre_mi_bold: String,
                url_foto: String){
                    this.nombre = nombre;
                    this.apellido = apellido;
                    this.domicilio = domicilio;
                    this.fechaNac = fechaNac;
                    this.telefono = telefono;
                    this.personacol = personacol;
                    this.correo = correo;
                    this.sobre_mi_bold = sobre_mi_bold;
                    this.url_foto = url_foto;


                }
}