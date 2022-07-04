import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  persona: persona = new persona("","","","","","","","","","","","","","","","","","","",""); //Creamos el objeto persona para inicializarlo 
  roles: string[] = [];
  isAdmin = false;

  constructor(
    public persoService : PersonaService,
    private router:Router,
    private tokenService: TokenService
    ){} //El constructor llama al servicio persona.service.

  ngOnInit(): void {
    this.persoService.getPersona().subscribe(data => {this.persona = data}); //Nuestra persona va a ser igual a lo que traiga data.
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if(rol === 'ROLE_ADMIN'){
        this.isAdmin=true;
      }
    });
  } //El método suscribe conecta con los eventos observable como "getPersona"

  editarHeader(id:number){
    this.router.navigate(['/modificar-header',id]);
  }

}
