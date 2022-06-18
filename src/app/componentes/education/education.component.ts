import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarreraService } from 'src/app/servicios/carrera.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  
  eduCarrera: any;

  constructor(private eduCarreraService:CarreraService, private router:Router){}

  ngOnInit(): void {
    this.eduCarreraService.getListaCarreras().subscribe(data=>{this.eduCarrera=data})
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
