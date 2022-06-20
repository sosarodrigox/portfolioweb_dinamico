import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { proyecto } from 'src/app/model/proyecto.model';



@Component({
  selector: 'app-modificar-proyecto',
  templateUrl: './modificar-proyecto.component.html',
  styleUrls: ['./modificar-proyecto.component.css']
})
export class ModificarProyectoComponent implements OnInit {

  id:any;
  proyecto:any;

  constructor(private route:ActivatedRoute, private proyectoService:ProyectoService, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id_proyecto'];
    this.proyecto = new proyecto("","","","","");
    this.proyectoService.traerProyectoPorId(this.id).subscribe(dato =>{
      this.proyecto = dato;
    });
  }

  modificarProyecto(){
    this.proyectoService.modificarProyecto(this.id, this.proyecto).subscribe(dato =>{
      console.log(dato);
      this.volverPortfolio();
    });
  }

  volverPortfolio(){
    this.router.navigate(['/portfolio']);
  }

  onSubmit(){
    this.modificarProyecto();
  }
}
