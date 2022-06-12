import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { edu_curso } from 'src/app/model/edu_curso.model';
import { CursoService } from 'src/app/servicios/curso.service';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent implements OnInit {

  curso : edu_curso = new edu_curso("", "", "","","","")

  constructor(private cursoService:CursoService, private router:Router) { }

  ngOnInit(): void {
  }

  crearCurso(){
    this.cursoService.crearCurso(this.curso).subscribe(dato =>{
      console.log(dato);
      this.volverPortfolio();
    });
  }

  volverPortfolio(){
    this.router.navigate(['/portfolio']);
  }

  onSubmit(){
    this.crearCurso();
  }

}
