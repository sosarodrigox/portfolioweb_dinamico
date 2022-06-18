import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  //Primero ponemos desde donde quiero que llame al backend
  URL = 'http://localhost:8080/'; //Este es el genérico, luego se concatenan los metodos html

  constructor(private http:HttpClient) { } //Agrego la variable http en el constructor

  //El observable lo utilizo para las peticiones asíncronas
  //Creo un método público
  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL+'traer-persona/1')
  }

  //Este método sirve para obtener o buscar una persona en particular.
  public traerPersonaPorId(id:number):Observable<persona>{
    return this.http.get<persona>(`${this.URL+'traer-persona/'}${id}`);
  }

  public modificarPersona(id:number, persona:persona):Observable<Object>{
    return this.http.put(this.URL+'modif-persona/'+id,persona);
  }
}
