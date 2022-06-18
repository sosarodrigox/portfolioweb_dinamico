import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-modificar-experiencia',
  templateUrl: './modificar-experiencia.component.html',
  styleUrls: ['./modificar-experiencia.component.css']
})
export class ModificarExperienciaComponent implements OnInit {

  id:any;
  experiencia:any;

  constructor(private route:ActivatedRoute,private expService:ExperienciaService, private router:Router) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id_exp'];
    this.experiencia = new experiencia("","","","","","");
    this.expService.traerExperienciaPorId(this.id).subscribe(dato =>{
      this.experiencia = dato;
    });
  }

  modificarExperiencia(){
    this.expService.modificarExperiencia(this.id, this.experiencia).subscribe(dato =>{
      console.log(dato);
      this.volverPortfolio();
    });
  }

  volverPortfolio(){
    this.router.navigate(['/portfolio']);
  }

  onSubmit(){
    this.modificarExperiencia();
  }
}
