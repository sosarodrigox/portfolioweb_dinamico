import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { proyecto } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  URL = 'http://localhost:8080/'

  constructor(private http: HttpClient) { }

  public getListaProyectos():Observable<proyecto>{
    return this.http.get<proyecto>(this.URL+'ver/lista-proyecto');
  }
}
