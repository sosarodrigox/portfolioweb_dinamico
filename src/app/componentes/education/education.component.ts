import { Component, OnInit } from '@angular/core';
import { CarreraService } from 'src/app/servicios/carrera.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  
  eduCarrera: any;

  constructor(private eduCarreraService:CarreraService){}

  ngOnInit(): void {
    this.eduCarreraService.getListaCarreras().subscribe(data=>{this.eduCarrera=data})
  }
  /*
  educacionList:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.educacionList = data.edu_carreras;
    });
  }
  */
}
