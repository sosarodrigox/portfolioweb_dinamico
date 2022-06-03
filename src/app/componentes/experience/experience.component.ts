import { Component, OnInit } from '@angular/core';
import { experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  //experiencia: experiencia = new experiencia("","","","","","");

  experiencia:any;
  
  constructor(private expService:ExperienciaService) { }

  ngOnInit(): void {
    this.expService.getListaExp().subscribe(data=>{this.experiencia=data})
  }
  /*
  experienciaList:any;

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.experienciaList = data.experiencia;
    });
  }
  */

}
