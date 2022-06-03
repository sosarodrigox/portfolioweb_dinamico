import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/servicios/curso.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  
  eduCurso: any;

  constructor(private eduCursoService:CursoService){}

  ngOnInit(): void {
    this.eduCursoService.getListaCursos().subscribe(data=>{this.eduCurso=data})
  }
  /*
  coursesList:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.coursesList = data.edu_cursos;
    })
  }
  */
}
