export class LoginUsuario {
    
    nom_usuario?: string;
    password?: string;
    
    constructor(nom_usuario: string, password: string){
        this.nom_usuario= nom_usuario;
        this.password = password;
    }
}
