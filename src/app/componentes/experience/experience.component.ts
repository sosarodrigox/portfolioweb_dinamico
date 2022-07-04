import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experienciaList:any;
  roles: string[] = [];
  isAdmin = false;
  
  constructor(
    private expService:ExperienciaService,
    private router:Router,
    private tokenService: TokenService
    ) { }

  ngOnInit(): void {
    this.expService.getListaExp().subscribe(data=>{this.experienciaList=data});
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if(rol === 'ROLE_ADMIN'){
        this.isAdmin=true;
      }
    });
  }

  crearExp(){
    this.router.navigate(['/crear-experiencia']);
  }

  modificarExp(id:number){
    this.router.navigate(['/modificar-experiencia',id]);
  }

  borrarExp(id:number){
    this.expService.borrarExperiencia(id).subscribe(dato =>{
      console.log(dato);
      this.ngOnInit();
    });
  }
}
