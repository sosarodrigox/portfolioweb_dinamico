import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-crear-experiencia',
  templateUrl: './crear-experiencia.component.html',
  styleUrls: ['./crear-experiencia.component.css']
})
export class CrearExperienciaComponent implements OnInit {

  experiencia : experiencia = new experiencia("", "", "", "", "", "")
  constructor(private expService: ExperienciaService, private router:Router) { }

  ngOnInit(): void {
  }

  crearExperiencia(){
    this.expService.crearExperiencia(this.experiencia).subscribe(dato =>{
      console.log(dato);
      this.volverPortfolio();
    });
  }


  volverPortfolio(){
    this.router.navigate(['/portfolio']);
  }

  onSubmit(){
    this.crearExperiencia();
  }
}
