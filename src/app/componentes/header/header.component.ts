import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //miPortofolio:any;
  //constructor(private datosPortfolio:PortfolioService) { }

  /*
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data=>{
      console.log(data);
      this.miPortofolio=data;
    });
  }
  */

  persona: persona = new persona("","","","","","","","","","","","","","","","","","","","",); //Creamos el objeto persona para inicializarlo 
  
  constructor(public persoService : PersonaService){}

  ngOnInit(): void {
    this.persoService.getPersona().subscribe(data => {this.persona = data}) //Nuestra persona va a ser igual a lo que traiga data.
  } //El método suscribe conecta con los eventos observable como "getPersona"

  editarHeader(){
    console.log("Función editarHeader!!!");
  }

}
