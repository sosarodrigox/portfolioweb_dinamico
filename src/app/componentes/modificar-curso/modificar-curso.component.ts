import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/servicios/curso.service';
import { ActivatedRoute, Router } from '@angular/router';
import { edu_curso } from 'src/app/model/edu_curso.model';

@Component({
  selector: 'app-modificar-curso',
  templateUrl: './modificar-curso.component.html',
  styleUrls: ['./modificar-curso.component.css']
})
export class ModificarCursoComponent implements OnInit {

  id:any;
  curso:any;
  
  constructor(private route:ActivatedRoute, private cursoService:CursoService, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id_curso'];
    this.curso = new edu_curso("","","","","","");
    this.cursoService.traerCursoPorId(this.id).subscribe(dato =>{
      this.curso = dato;
    });
  }

  modificarCurso(){
    this.cursoService.modificarCurso(this.id, this.curso).subscribe(dato =>{
      console.log(dato);
      this.volverPortfolio();
    });
  }

  volverPortfolio(){
    this.router.navigate(['/portfolio']);
  }

  onSubmit(){
    this.modificarCurso();
  }
}
