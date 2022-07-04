import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarreraService } from 'src/app/servicios/carrera.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  
  eduCarrera: any;
  roles: string[] = [];
  isAdmin = false;

  constructor(
     private eduCarreraService:CarreraService,
     private router:Router,
     private tokenService: TokenService
     ){}

  ngOnInit(): void {
    this.eduCarreraService.getListaCarreras().subscribe(data=>{this.eduCarrera=data});
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if(rol === 'ROLE_ADMIN'){
        this.isAdmin=true;
      }
    });
  }

  crearCarrera(){
    this.router.navigate(['/crear-carrera'])
  }
 
  modificarCarrera(id:number){
    this.router.navigate(['/modificar-carrera',id]);
  }

  borrarCarrera(id:number){
    this.eduCarreraService.borrarCarrera(id).subscribe(dato =>{
      console.log(dato);
      this.ngOnInit();
    });
  }

}
