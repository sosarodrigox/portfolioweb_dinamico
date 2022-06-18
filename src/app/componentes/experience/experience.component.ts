import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experienciaList:any;
  
  constructor(private expService:ExperienciaService, private router:Router) { }

  ngOnInit(): void {
    this.expService.getListaExp().subscribe(data=>{this.experienciaList=data});
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
