import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

//Servicio desde BBDD
persona: persona = new persona("","","","","","","","","","","","","","","","","","","","",); //Creamos el objeto persona para inicializarlo 

constructor(public persoService: PersonaService){} //El constructor llama al servicio persona.service.

//Lo que hace al inicializar:
ngOnInit(): void {
  this.persoService.getPersona().subscribe(data =>{this.persona=data}) 
  //Lo que esté en persona se guarda en data. Suscribe conecta el observer con algunos eventos observables.
}

  /*
  toma datos locales del data.json
  miPortfolio:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPortfolio=data;
    })
  }
  */
}
