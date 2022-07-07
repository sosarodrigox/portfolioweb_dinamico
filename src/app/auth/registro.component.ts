import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { AuthService } from '../servicios/auth.service';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  isRegister = false;
  isLogged = false;
  isRegisterFail = false;
  nuevoUsuario?: NuevoUsuario;
  nombre: string = '';
  nombreUsuario: string = '';
  email: string = '';
  password: string = '';
  errMsj : string = '';
  
  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
  }

  onRegister():void{
    this.nuevoUsuario = new NuevoUsuario(this.nombre, this.nombreUsuario, this.email, this.password);
    this.authService.nuevo(this.nuevoUsuario).subscribe(
      data => {
        this.isRegister = true;
        this.isRegisterFail = false;

        this.router.navigate(['/login']);
      },
      err => {
        this.isRegister = false;
        this.isRegisterFail = true;
        this.errMsj = err.error.mensaje;
        //console.log(err.error.mensaje);
        //VER ERROR EN BACKEND: Cuando http ejecuta /auth/Login (NO toma la variable "mensaje" cuando hay error)
      }
    );
  }
}
