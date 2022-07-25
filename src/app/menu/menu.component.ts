import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from '../model/persona.model';
import { PersonaService } from '../servicios/persona.service';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  imgUnregistered = 'https://i.ibb.co/588cz84/alien.png';
  isLogged = false;
  nombreUsuario = '';
  persona: persona = new persona("","","","","","","","","","","","","","","","","","","","");

  constructor(public persoService: PersonaService, private tokenService: TokenService, private router:Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName();
    }else{
      this.isLogged = false;
      this.nombreUsuario = '';
    }
    this.persoService.getPersona().subscribe(data =>{this.persona = data})
  }

  onLogOut(): void{
    this.tokenService.logOut();
    window.location.reload();
  }
  

}
