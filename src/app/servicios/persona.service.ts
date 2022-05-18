import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  //Primero ponemos desde donde quiero que llame al backend
  URL = 'http://localhost:8080/';

  constructor(private http:HttpClient) { }

  //El observable lo utilizo para las peticiones asíncronas
  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL+'traer/1')
  }
}
