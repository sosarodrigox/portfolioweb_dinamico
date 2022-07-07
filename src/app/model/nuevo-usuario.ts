export class NuevoUsuario {
    nombre?: string;
    nombreUsuario?: string;
    email?: string;
    password?: string;
    //authorities?: string[]; Lo saqué por el momento, a futuro puede crear roles de administrador, ahora es solo user

    constructor(nombre: string, nombreUsuario: string, email: string, password: string) {
        this.nombre = nombre;
        this.nombreUsuario = nombreUsuario;
        this.email = email;
        this.password = password;
    }
}
