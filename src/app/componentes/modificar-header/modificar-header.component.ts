import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {persona} from "src/app/model/persona.model";
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-modificar-header',
  templateUrl: './modificar-header.component.html',
  styleUrls: ['./modificar-header.component.css']
})
export class ModificarHeaderComponent implements OnInit {

  id:any;
  persona:any;

  constructor(private route:ActivatedRoute, private personaService:PersonaService, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.persona = new persona("","","","","","","","","","","","","","","","","","","","");
    this.personaService.traerPersonaPorId(this.id).subscribe(dato=>{
      this.persona=dato;
    });
  }

  modificarPersona(){
    this.personaService.modificarPersona(this.id,this.persona).subscribe(dato =>{
      console.log(dato);
      this.volverPortfolio();
    })
  }

  volverPortfolio(){
    this.router.navigate(['/home']);
  }

  onSubmit(){
    this.modificarPersona();
  }

}
