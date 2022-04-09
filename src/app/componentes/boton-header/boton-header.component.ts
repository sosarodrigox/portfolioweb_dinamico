import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton-header',
  templateUrl: './boton-header.component.html',
  styleUrls: ['./boton-header.component.css']
})
export class BotonHeaderComponent implements OnInit {
  @Input() text: string = ""; //propiedad que ingresa desde el header.component.html cuando declaro el comp. botón.  @
  @Output() btnClick = new EventEmitter() //Emite hacia afuera del componente una acción

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit() //El método "emit" envía hacia afuera del componente la acción que recibe el botón.
  }

}
