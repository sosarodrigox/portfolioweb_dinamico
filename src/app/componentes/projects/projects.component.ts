import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  proyecto: any;
  roles: string[] = [];
  isAdmin = false;

  constructor(
    private proyectoService:ProyectoService,
    private router:Router,
    private tokenService: TokenService
    ){}

  ngOnInit(): void {
    this.proyectoService.getListaProyectos().subscribe(data=>{this.proyecto=data});
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if(rol === 'ROLE_ADMIN'){
        this.isAdmin=true;
      }
    });
  }

  crearProyecto(){
    this.router.navigate(['/crear-proyecto'])
    }
  
  modificarProyecto(id:number){
      this.router.navigate(['/modificar-proyecto',id]);
    }
  
  borrarProyecto(id:number){
      this.proyectoService.borrarProyecto(id).subscribe(dato =>{
        console.log(dato);
        this.ngOnInit();
      });
    }
}
