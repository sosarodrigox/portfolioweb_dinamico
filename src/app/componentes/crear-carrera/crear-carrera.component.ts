import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { edu_carrera } from 'src/app/model/edu_carrera.model';
import { CarreraService } from 'src/app/servicios/carrera.service';

@Component({
  selector: 'app-crear-carrera',
  templateUrl: './crear-carrera.component.html',
  styleUrls: ['./crear-carrera.component.css']
})
export class CrearCarreraComponent implements OnInit {

  carrera : edu_carrera = new edu_carrera("","","","","","")

  constructor(private carreraService: CarreraService, private router:Router) { }

  ngOnInit(): void {
  }

  crearCarrera(){
    this.carreraService.crearCarrera(this.carrera).subscribe(dato =>{
      console.log(dato);
      this.volverPortfolio();
    });
  }

  volverPortfolio(){
    this.router.navigate(['/portfolio']);
  }

  onSubmit(){
    this.crearCarrera();
  }
}
