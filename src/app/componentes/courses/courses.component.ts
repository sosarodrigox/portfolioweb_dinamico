import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursoService } from 'src/app/servicios/curso.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  
  eduCurso: any;
  roles: string[] = [];
  isAdmin = false;

  constructor(
    private eduCursoService:CursoService,
    private router:Router,
    private tokenService: TokenService
    ){}

  ngOnInit(): void {
    this.eduCursoService.getListaCursos().subscribe(data=>{this.eduCurso=data});
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if(rol === 'ROLE_ADMIN'){
        this.isAdmin=true;
      }
    });
  }

  crearCurso(){
    this.router.navigate(['/crear-curso'])
  }

  modificarCurso(id:number){
    this.router.navigate(['/modificar-curso',id]);
  }

  borrarCurso(id:number){
    this.eduCursoService.borrarCurso(id).subscribe(dato =>{
      console.log(dato);
      this.ngOnInit();
    });
  }
}
