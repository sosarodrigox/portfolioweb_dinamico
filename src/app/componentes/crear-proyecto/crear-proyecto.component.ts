import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.css']
})
export class CrearProyectoComponent implements OnInit {

  proyecto: proyecto = new proyecto("","","","","")

  constructor(private proyectoService:ProyectoService,private router:Router) { }

  ngOnInit(): void {
  }

  crearProyecto(){
    this.proyectoService.crearProyecto(this.proyecto).subscribe(dato =>{
      console.log(dato);
      this.volverPortfolio();
    })
  }

  volverPortfolio(){
    this.router.navigate(['/portfolio']);
  }

  onSubmit(){
    this.crearProyecto();
  }

}
