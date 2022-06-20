import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  proyecto: any;

  constructor(private proyectoService:ProyectoService, private router:Router){}

  ngOnInit(): void {
    this.proyectoService.getListaProyectos().subscribe(data=>{this.proyecto=data});
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
