import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from '../model/persona.model';
import { PersonaService } from '../servicios/persona.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  persona: persona = new persona("","","","","","","","","","","","","","","","","","","","");

  constructor(public persoService: PersonaService, private router:Router) { }

  ngOnInit(): void {
    this.persoService.getPersona().subscribe(data =>{this.persona = data})
  }

}
