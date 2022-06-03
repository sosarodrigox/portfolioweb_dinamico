import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  proyecto: any;

  constructor(private proyectoService:ProyectoService){}

  ngOnInit(): void {
    this.proyectoService.getListaProyectos().subscribe(data=>{this.proyecto=data});
  }
  /*
  projectList:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {this.datosPortfolio.obtenerDatos().subscribe(data =>{
    console.log(data);
    this.projectList = data.proyectos;
  })
  }
  */
}
