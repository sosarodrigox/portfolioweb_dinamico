import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { edu_carrera } from 'src/app/model/edu_carrera.model';
import { CarreraService } from 'src/app/servicios/carrera.service';

@Component({
  selector: 'app-modificar-carrera',
  templateUrl: './modificar-carrera.component.html',
  styleUrls: ['./modificar-carrera.component.css']
})
export class ModificarCarreraComponent implements OnInit {

  id:any;
  carrera:any;

  constructor(private route:ActivatedRoute, private carreraService:CarreraService, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id_carrera'];
    this.carrera = new edu_carrera("","","","","","");
    this.carreraService.traerCarreraPorId(this.id).subscribe(dato =>{
      this.carrera = dato;
    });
  }

  modificarCarrera(){
    this.carreraService.modificarCarrera(this.id, this.carrera).subscribe(dato =>{
      console.log(dato);
      this.volverPortfolio();
    });
  }

  volverPortfolio(){
    this.router.navigate(['/home']);
  }

  onSubmit(){
    this.modificarCarrera();
  }
}
