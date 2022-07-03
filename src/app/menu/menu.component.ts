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

  isLogged = false;
  persona: persona = new persona("","","","","","","","","","","","","","","","","","","","");

  constructor(public persoService: PersonaService, private tokenService: TokenService, private router:Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
    this.persoService.getPersona().subscribe(data =>{this.persona = data})
  }

  onLogOut(): void{
    this.tokenService.logOut();
    window.location.reload();
  }
  

}
